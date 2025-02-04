import { LogLevelDesc } from 'loglevel'
import { NumberOfAccountsQuantifier } from './IO/schemas'

export const config = {
  extensionDetectionTime: 100,
  defaultNumberOfAccountsQuantity: 1,
  defaultNumberOfAccountsQuantifier: 'atLeast' as NumberOfAccountsQuantifier,
  logLevel: 'info' as LogLevelDesc,
}
