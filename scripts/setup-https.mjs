import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const certDir = path.join(rootDir, 'certs')
const certPath = path.join(certDir, 'localhost.pem')
const keyPath = path.join(certDir, 'localhost-key.pem')
const caCertPath = path.join(certDir, 'ca.crt')
const caKeyPath = path.join(certDir, 'ca.key')

function collectDomains() {
  const domains = new Set(['localhost', '127.0.0.1', '::1'])

  for (const net of Object.values(os.networkInterfaces())) {
    for (const details of net ?? []) {
      if (details.family === 'IPv4' && !details.internal) {
        domains.add(details.address)
      }

      if (details.family === 'IPv6' && !details.internal) {
        domains.add(details.address)
      }
    }
  }

  return [...domains]
}

function ensureCerts() {
  fs.mkdirSync(certDir, { recursive: true })

  const certExists = fs.existsSync(certPath)
  const keyExists = fs.existsSync(keyPath)

  if (certExists && keyExists) {
    return
  }

  try {
    execFileSync(
      'npx',
      ['--yes', 'mkcert@latest', 'create-ca', '--cert', caCertPath, '--key', caKeyPath],
      { cwd: rootDir, stdio: 'inherit' },
    )

    const domains = collectDomains().join(',')

    execFileSync(
      'npx',
      ['--yes', 'mkcert@latest', 'create-cert', '--ca-cert', caCertPath, '--ca-key', caKeyPath, '--domains', domains, '--cert', certPath, '--key', keyPath],
      { cwd: rootDir, stdio: 'inherit' },
    )
  } catch (error) {
    console.warn('Unable to generate local HTTPS certificate automatically.')
    console.warn('If you are using a browser with a trusted local CA, you may need to import the generated cert manually.')
    console.warn('Error:', error.message)
  }
}

ensureCerts()
