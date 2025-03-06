The above project is a Filterable Image Gallery implemented using HTML, CSS, and JavaScript. It allows users to view a collection of images and filter them based on categories such as Nature, City, and Animals. 
Key Features
Filter Options:

Users can click on filter buttons (e.g., "Nature", "City", "Animals") to display images belonging to a specific category.

The "All" button shows all images without any filtering.

Responsive Design:

The gallery is designed to be responsive, meaning it adjusts to different screen sizes (desktop, tablet, mobile).

Dynamic Filtering:

The filtering is implemented using JavaScript, which dynamically hides or shows images based on the selected category.

Image Loading:

Images are loaded from Unsplash (a free image resource) using dynamic URLs. You can replace these URLs with your own image paths if needed.

Technologies Used
HTML:

Used to structure the content, including the filter buttons and the image gallery.

Each image is wrapped in a div with a data-tag attribute to categorize it (e.g., nature, city, animals).

CSS:

Used to style the gallery, filter buttons, and images.

Ensures a clean and visually appealing layout.

JavaScript:

Used to implement the filtering logic.

Adds interactivity to the gallery by showing/hiding images based on the selected filter.
How It Works
HTML Structure:

The gallery consists of a set of filter buttons and a collection of images.

Each image is assigned a data-tag attribute to categorize it (e.g., nature, city, animals).

CSS Styling:

The filter buttons are styled to look interactive, with an active class to highlight the selected filter.

The gallery uses flexbox to arrange images in a grid-like layout.

JavaScript Logic:

When a filter button is clicked, JavaScript:

Removes the active class from all buttons and adds it to the clicked button.

Loops through all images and checks their data-tag attribute.

Displays images that match the selected filter and hides the rest.
