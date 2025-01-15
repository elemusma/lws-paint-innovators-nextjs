export const modalPopup = () => {
    // Open a modal by ID
    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add("active");
        } else {
            console.warn(`Modal with ID "${modalId}" not found.`);
        }
    };
    
    // Close a modal by ID
    const closeModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove("active");
        } else {
            console.warn(`Modal with ID "${modalId}" not found.`);
        }
    };
    console.log('hellossee');
  
    // Add global event listeners to handle modals
    const initializeModalListeners = () => {
      const closeBtns = document.getElementsByClassName("close");
  
      if (closeBtns.length === 0) {
        console.warn("No close buttons found. Ensure DOM is rendered.");
      }
  
      Array.from(closeBtns).forEach((btn) => {
        btn.addEventListener("click", () => {
          const modal = btn.closest(".modal");
          if (modal) {
            modal.classList.remove("active");
            console.log(`Closed modal: ${modal.id}`);
          }
        });
      });
  
      window.addEventListener("click", (event) => {
        if (
          event.target.classList.contains("modal") ||
          event.target.classList.contains("modal-content-menu")
        ) {
          event.target.classList.remove("active");
          console.log(`Clicked outside modal: ${event.target.id}`);
        }
      });
  
      console.log("Global modal listeners initialized");
    };
  
    // Call the initialization logic
    initializeModalListeners();
  
    // Return the utility functions if you need to call them programmatically
    return { openModal, closeModal };
  };
  