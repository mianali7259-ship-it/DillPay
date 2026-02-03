export const securityChecklist = {
  encryptedStorage: true,
  biometricEnabled: true,
  pinRequired: true,
  fraudMonitoring: true,
  secureApi: true
};

export function maskPhone(phone: string) {
  return phone.replace(/(\d{3})\d{4}(\d{2})/, "$1••••$2");
}
