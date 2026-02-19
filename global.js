// Global JavaScript functions

// Function to initialize sidebar (if needed)
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        // Add basic sidebar content if it's empty
        if (sidebar.innerHTML.trim() === '') {
            sidebar.innerHTML = `
                <div class="sidebar-content">
                    <div class="sidebar-header">
                        <h3>TechNoteCore</h3>
                    </div>
                    <nav class="sidebar-nav">
                        <a href="dashboard.html" class="nav-item">
                            <i class="fas fa-home"></i> Dashboard
                        </a>
                        <a href="upload.html" class="nav-item active">
                            <i class="fas fa-upload"></i> Upload Materials
                        </a>
                        <a href="index.html" class="nav-item">
                            <i class="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </nav>
                </div>
            `;
        }
    }
}

// Function to initialize hamburger menu for mobile
function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }
}

// Initialize common features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initHamburger();
});
