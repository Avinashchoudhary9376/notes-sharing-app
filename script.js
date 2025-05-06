document.getElementById('noteForm').addEventListener('submit', function(e) {
    e.preventDefault(); // stop page reload
  
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const file = document.getElementById('noteFile').files[0];
  
    if (!file) {
      alert("Please select a PDF file.");
      return;
    }
  
    const output = document.getElementById('output');
    output.innerHTML = `
      <h3>Uploaded Successfully!</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>File Name:</strong> ${file.name}</p>
    `;
  });
  