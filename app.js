document.addEventListener('DOMContentLoaded', function () {
    const codeContent = document.querySelector('.code-content');
    const copyButton = document.querySelector('.copy-button');
    const lockButton = document.querySelector('.lock-button');

    copyButton.addEventListener('click', function () {
        const textToCopy = codeContent.innerText;
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Code copied to clipboard');
    });

    lockButton.addEventListener('click', function () {
        codeContent.contentEditable = !codeContent.isContentEditable;
        lockButton.innerText = codeContent.isContentEditable ? 'Unlock' : 'Lock';
    });
});
