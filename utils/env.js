// 识别当前环境
export const getEnv = () => {
  const isLocal = window.location.href.match('localhost');
  const isPre = window.location.href.match('huanxizizai.com');
  if (isLocal) {
    return 'dev';
  }

  if (isLocal) {
    return 'dev';
  }
  if (isPre) {
    return 'pre';
  }
  return 'online';
}