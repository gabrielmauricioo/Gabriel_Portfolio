

export const downloadFile = (fileName: string): void => {
  const link = document.createElement('a');
  link.href = fileName;  // Caminho para o PDF
  link.download = fileName.split('/').pop() || '';  // Nome do arquivo a ser baixado
  link.click();
};

