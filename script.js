const pages = [
    {
        title: "Funny",
        text: "There isnt a moment where you would struggle to make me smile or laugh.",
        topImage: "image1.png",
        bottomImage: "image1L.png"
    },
    {
        title: "Butterfly",
        text: "No matter how much I tell you how beautiful you are, you'll never understand what I see in you.",
        topImage: "image2.png",
        bottomImage: "image5L.png"
    },
    {
        title: "Abracadabra!",
        text: "You popped up out of nowhere, giving me unexpected feelings and love i've never had before.",
        topImage: "image3.png",
        bottomImage: "image4L.png"
    },
    {
        title: "Dream",
        text: "The most amazing and magnificant, but unexpected.",
        topImage: "image4.png",
        bottomImage: "image3L.png"
    },
    {
        title: "Everything",
        text: "You'll never understand how much you mean to me,",
        topImage: "image5.png",
        bottomImage: "image2L.png"
    }
];

let currentPageIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-button').addEventListener('click', () => {
        document.getElementById('initial-screen').style.display = 'none';
        document.getElementById('book-container').classList.remove('hidden');
        document.getElementById('top-right-image').classList.remove('hidden');
        document.getElementById('bottom-left-image').classList.remove('hidden');
        updateContent();
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            updateContent();
        }
    } else if (event.key === 'ArrowLeft') {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updateContent();
        }
    }
});

document.getElementById('right-arrow').addEventListener('click', () => {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        updateContent();
    }
});

document.getElementById('left-arrow').addEventListener('click', () => {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        updateContent();
    }
});

function updateContent() {
    const titleContainer = document.getElementById('title-container');
    const textContainer = document.getElementById('text-container');
    const topRightImage = document.getElementById('top-right-image');
    const bottomLeftImage = document.getElementById('bottom-left-image');
    
    titleContainer.textContent = pages[currentPageIndex].title;
    textContainer.textContent = pages[currentPageIndex].text;
    topRightImage.src = pages[currentPageIndex].topImage;
    topRightImage.alt = `Image for ${pages[currentPageIndex].text}`;
    bottomLeftImage.src = pages[currentPageIndex].bottomImage;
    bottomLeftImage.alt = `Image for ${pages[currentPageIndex].text}`;
}
