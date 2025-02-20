```javascript
// ... your Tailwind CSS classes
<div class="bg-gray-100 p-4">
  <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700">
    Click Me
  </button>
</div>
```

**Explanation:**

The solution adds `transition duration-300 ease-in-out` to the button's classes. This ensures that Tailwind's transition utilities are properly applied, allowing for smooth hover animations.  This is often overlooked but crucial for ensuring hover effects work as expected.  If the problem persists after adding this, double check that there are no conflicting CSS rules overriding the hover class.