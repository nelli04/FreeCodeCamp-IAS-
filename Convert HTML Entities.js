function convertHTML(str) {
    const html = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;'
    }
    return str.replace(/([&<>\"'])/g, match => html[match])
  }
  
  convertHTML("Dolce & Gabbana");