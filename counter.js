//const proxyUrl = 'https://api.allorigins.win/raw?url=';
//const targetUrl = 'https://websitecounter.vercel.app/k/fastbrowserwebsitecounter1840712jer018';
//const url = proxyUrl + encodeURIComponent(targetUrl) + '&disableCache=true';

const url = 'https://websitecounter.vercel.app/k/fastbrowserwebsitecounter1840712jer018';

const elem = document.createElement("h3");
elem.setAttribute("id", "counter");
console.log(url);
document.body.appendChild(elem);

async function fetchAndInjectContent() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        
        // Process the data (same logic as before)
        const lastTwoDigits = parseInt(data.slice(-2), 10);
        const lastDigit = parseInt(data.slice(-1), 10);
        
        let suffix = "th";  // Default suffix
        if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
            suffix = "th";  // 11th, 12th, 13th
        } else if (lastDigit === 1) {
            suffix = "st";
        } else if (lastDigit === 2) {
            suffix = "nd";
        } else if (lastDigit === 3) {
            suffix = "rd";
        }

        if (elem) {
            elem.innerHTML = `You are the ${data}${suffix} user to visit this site.`;
        } else {
            console.error('Target element not found.');
        }
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}

fetchAndInjectContent();
