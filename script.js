document.getElementById('format-button').addEventListener('click', () => {
    const wisdomInput = document.getElementById('wisdom-input').value;
    const formattedWisdom = formatWisdom(wisdomInput);
    document.getElementById('formatted-wisdom').textContent = formattedWisdom;
});

function formatWisdom(wisdom) {
    // Implement your formatting logic here
    // For simplicity, let's just make it uppercase and add quotes
    return `"${wisdom.toUpperCase()}"`;
}
