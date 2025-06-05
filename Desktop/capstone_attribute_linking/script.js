// Add filter chips
const filterChips = document.getElementById('filterChips');
const filterNames = Array(10).fill('filter name');

filterNames.forEach(name => {
    const chip = document.createElement('div');
    chip.className = 'filter-chip';
    chip.textContent = name;
    filterChips.appendChild(chip);
});

// Add product cards
const productGrid = document.getElementById('productGrid');
const catalogImages = [
    'src/images/catalog/76010537_260_d.webp',
    'src/images/catalog/99806879_049_b2.webp',
    'src/images/catalog/90005802_712_b2.webp'
];

// Fake data arrays for generating realistic product information
const colors = [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Navy', value: '#1F2937' },
    { name: 'Gray', value: '#6B7280' },
    { name: 'Red', value: '#EF4444' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Green', value: '#10B981' },
    { name: 'Brown', value: '#A3A3A3' },
    { name: 'Beige', value: '#F5F5DC' },
    { name: 'Olive', value: '#8B8B3D' }
];

const sizesByCategory = {
    'Apparel': ['XS', 'S', 'M', 'L', 'XL'],
    'Footwear': ['7', '8', '9', '10', '11'],
    'Accessories': ['One Size'],
    'Default': ['S', 'M', 'L']
};

const fabrics = ['Cotton', 'Polyester', 'Cotton Blend', 'Wool', 'Silk', 'Linen', 'Denim', 'Cashmere'];
const measurements = ['Chest: 42"', 'Waist: 32"', 'Length: 28"', 'Sleeve: 24"'];

function generateFakeProductData(product) {
    const randomColors = colors.slice(0, Math.floor(Math.random() * 4) + 2); // 2-5 colors
    const categoryKey = Object.keys(sizesByCategory).find(key => 
        product.category.toLowerCase().includes(key.toLowerCase())
    ) || 'Default';
    const availableSizes = sizesByCategory[categoryKey];
    const randomSizes = availableSizes.slice(0, Math.floor(Math.random() * availableSizes.length) + 1);
    
    return {
        name: product.name,
        styleNumber: `STY${Math.floor(Math.random() * 900000) + 100000}`,
        category: product.category,
        gender: ['Men', 'Women', 'Unisex'][Math.floor(Math.random() * 3)],
        season: ['Spring', 'Summer', 'Fall', 'Winter'][Math.floor(Math.random() * 4)],
        description: `A high-quality ${product.name.toLowerCase()} crafted with attention to detail and comfort. Perfect for everyday wear with a modern fit and versatile styling options.`,
        sizes: randomSizes,
        colors: randomColors,
        fabric: fabrics[Math.floor(Math.random() * fabrics.length)],
        liningFabric: Math.random() > 0.5 ? fabrics[Math.floor(Math.random() * fabrics.length)] : '-',
        finishCoating: Math.random() > 0.7 ? 'Water-resistant coating' : '-',
        measurement: measurements[Math.floor(Math.random() * measurements.length)],
        constructionNotes: `Double-stitched seams for durability. Reinforced stress points. Quality ${fabrics[Math.floor(Math.random() * fabrics.length)]} construction.`,
        seamDetails: 'Flat-felled seams. French seams on stress points.',
        sampleSize: randomSizes[Math.floor(randomSizes.length / 2)] || 'M',
        dutyRate: `$${(Math.random() * 10 + 5).toFixed(2)}`,
        miscCost: `$${(Math.random() * 20 + 10).toFixed(2)}`,
        listPrice: `$${(Math.random() * 200 + 50).toFixed(2)}`,
        imageUrl: product.imageUrl,
        isNewProduct: false
    };
}

const products = [
    { name: 'Classic T-Shirt', category: 'Apparel', imageUrl: catalogImages[0], variants: 5, companyInitial: 'A' },
    { name: 'Denim Jacket', category: 'Outerwear', imageUrl: catalogImages[1], variants: 3, companyInitial: 'B' },
    { name: 'Summer Dress', category: 'Apparel', imageUrl: catalogImages[2], variants: 7, companyInitial: 'C' },
    { name: 'Leather Boots', category: 'Footwear', imageUrl: catalogImages[0], variants: 4, companyInitial: 'D' },
    { name: 'Wool Sweater', category: 'Knitwear', imageUrl: catalogImages[1], variants: 6, companyInitial: 'E' },
    { name: 'Canvas Sneakers', category: 'Footwear', imageUrl: catalogImages[2], variants: 8, companyInitial: 'F' },
    { name: 'Silk Blouse', category: 'Tops', imageUrl: catalogImages[0], variants: 4, companyInitial: 'G' },
    { name: 'Cargo Pants', category: 'Bottoms', imageUrl: catalogImages[1], variants: 5, companyInitial: 'H' },
    { name: 'Winter Coat', category: 'Outerwear', imageUrl: catalogImages[2], variants: 3, companyInitial: 'I' },
    { name: 'Athletic Shorts', category: 'Sportswear', imageUrl: catalogImages[0], variants: 6, companyInitial: 'J' },
    { name: 'Formal Blazer', category: 'Suits', imageUrl: catalogImages[1], variants: 4, companyInitial: 'K' },
    { name: 'Casual Jeans', category: 'Denim', imageUrl: catalogImages[2], variants: 9, companyInitial: 'L' },
    { name: 'Linen Shirt', category: 'Shirts', imageUrl: catalogImages[0], variants: 5, companyInitial: 'M' },
    { name: 'Yoga Leggings', category: 'Activewear', imageUrl: catalogImages[1], variants: 7, companyInitial: 'N' },
    { name: 'Cashmere Scarf', category: 'Accessories', imageUrl: catalogImages[2], variants: 3, companyInitial: 'O' },
    { name: 'Running Shoes', category: 'Athletic', imageUrl: catalogImages[0], variants: 8, companyInitial: 'P' },
    { name: 'Midi Skirt', category: 'Bottoms', imageUrl: catalogImages[1], variants: 5, companyInitial: 'Q' },
    { name: 'Polo Shirt', category: 'Tops', imageUrl: catalogImages[2], variants: 6, companyInitial: 'R' },
    { name: 'Trench Coat', category: 'Coats', imageUrl: catalogImages[0], variants: 4, companyInitial: 'S' },
    { name: 'Board Shorts', category: 'Swimwear', imageUrl: catalogImages[1], variants: 7, companyInitial: 'T' },
    { name: 'Knit Cardigan', category: 'Knitwear', imageUrl: catalogImages[2], variants: 5, companyInitial: 'U' },
    { name: 'Oxford Shoes', category: 'Formal', imageUrl: catalogImages[0], variants: 3, companyInitial: 'V' },
    { name: 'Maxi Dress', category: 'Dresses', imageUrl: catalogImages[1], variants: 6, companyInitial: 'W' },
    { name: 'Chino Pants', category: 'Casual', imageUrl: catalogImages[2], variants: 8, companyInitial: 'X' },
    { name: 'Puffer Vest', category: 'Vests', imageUrl: catalogImages[0], variants: 4, companyInitial: 'Y' },
    { name: 'Tank Top', category: 'Basics', imageUrl: catalogImages[1], variants: 9, companyInitial: 'Z' },
    { name: 'Bomber Jacket', category: 'Jackets', imageUrl: catalogImages[2], variants: 5, companyInitial: 'A' },
    { name: 'Pencil Skirt', category: 'Professional', imageUrl: catalogImages[0], variants: 4, companyInitial: 'B' },
    { name: 'Hoodie', category: 'Casual', imageUrl: catalogImages[1], variants: 7, companyInitial: 'C' },
    { name: 'Dress Shirt', category: 'Formal', imageUrl: catalogImages[2], variants: 6, companyInitial: 'D' },
    { name: 'Flip Flops', category: 'Summer', imageUrl: catalogImages[0], variants: 5, companyInitial: 'E' },
    { name: 'Wrap Dress', category: 'Feminine', imageUrl: catalogImages[1], variants: 8, companyInitial: 'F' },
    { name: 'Track Pants', category: 'Sportswear', imageUrl: catalogImages[2], variants: 6, companyInitial: 'G' },
    { name: 'Turtleneck', category: 'Tops', imageUrl: catalogImages[0], variants: 4, companyInitial: 'H' },
    { name: 'Combat Boots', category: 'Edgy', imageUrl: catalogImages[1], variants: 3, companyInitial: 'I' },
    { name: 'A-Line Dress', category: 'Classic', imageUrl: catalogImages[2], variants: 7, companyInitial: 'J' }
];

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Generate fake data for this product
    const fakeData = generateFakeProductData(product);
    
    card.innerHTML = `
        <div class="product-image">
            <div class="image-dots">
                <span class="dot active"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <img src="${product.imageUrl}" alt="${product.name}">
            <div class="variant-badge">+${product.variants}</div>
            <button class="more-options">
                <span class="material-icons-outlined">more_vert</span>
            </button>
        </div>
        <div class="product-info">
            <div class="company-icon">${product.companyInitial}</div>
            <div class="product-details">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
            </div>
        </div>
    `;
    
    // Store the fake data
    card.dataset.productData = JSON.stringify(fakeData);
    
    productGrid.appendChild(card);
});

// Add click handlers for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.classList.contains('nav-btn')) {
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Add hover effect for filter chips
document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#f3f4f6';
    });
    chip.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'white';
    });
});

// Side Panel Functionality
document.addEventListener('DOMContentLoaded', () => {
    const createProductBtn = document.querySelector('.create-product-btn');
    const sidePanel = document.getElementById('sidePanel');
    const overlay = document.getElementById('overlay');
    const closePanelBtn = document.getElementById('closePanelBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const productForm = document.getElementById('productForm');
    const addSizeBtn = document.getElementById('addSizeBtn');
    const sizePopup = document.getElementById('sizePopup');
    const addColorBtn = document.getElementById('addColorBtn');
    const colorPopup = document.getElementById('colorPopup');

    // Product Detail Page functionality
    const productDetailPage = document.getElementById('productDetailPage');
    const backToShowcaseBtn = document.getElementById('backToShowcase');

    function showProductDetail(productData) {
        // Populate the detail page with product data
        document.getElementById('detailProductName').textContent = productData.name;
        document.getElementById('detailStyleNumber').textContent = productData.styleNumber;
        document.getElementById('detailCategory').textContent = productData.category;
        document.getElementById('detailDescription').textContent = productData.description;
        
        // Handle main image
        const mainImage = document.getElementById('detailMainImage');
        if (productData.isNewProduct) {
            mainImage.innerHTML = ''; // Show background color only
        } else {
            mainImage.innerHTML = `<img src="${productData.imageUrl}" alt="${productData.name}">`;
        }
        
        // Handle sizes
        const sizesContainer = document.getElementById('detailSizes');
        if (productData.sizes && productData.sizes.length > 0) {
            sizesContainer.innerHTML = productData.sizes.map(size => 
                `<span class="variant-chip">${size}</span>`
            ).join('');
        } else {
            sizesContainer.textContent = '-';
        }
        
        // Handle colors
        const colorsContainer = document.getElementById('detailColors');
        if (productData.colors && productData.colors.length > 0 && productData.colors[0].name) {
            colorsContainer.innerHTML = productData.colors.map(color => 
                `<div class="variant-color-chip">
                    <div class="variant-color-swatch" style="background-color: ${color.value}"></div>
                    <span>${color.name}</span>
                </div>`
            ).join('');
        } else {
            colorsContainer.textContent = '-';
        }
        
        // Material information
        document.getElementById('detailFabric').textContent = productData.fabric;
        document.getElementById('detailLiningFabric').textContent = productData.liningFabric;
        document.getElementById('detailFinishCoating').textContent = productData.finishCoating;
        
        // Construction & Specs
        document.getElementById('detailMeasurement').textContent = productData.measurement;
        document.getElementById('detailConstructionNotes').textContent = productData.constructionNotes;
        document.getElementById('detailSeamDetails').textContent = productData.seamDetails;
        document.getElementById('detailSampleSize').textContent = productData.sampleSize;
        
        // Pricing
        document.getElementById('detailDutyRate').textContent = productData.dutyRate;
        document.getElementById('detailMiscCost').textContent = productData.miscCost;
        document.getElementById('detailListPrice').textContent = productData.listPrice;
        
        // Show the detail page
        document.querySelector('.action-bar').style.display = 'none';
        productGrid.style.display = 'none';
        productDetailPage.classList.remove('hidden');
    }

    function hideProductDetail() {
        document.querySelector('.action-bar').style.display = 'flex';
        productGrid.style.display = 'grid';
        productDetailPage.classList.add('hidden');
    }

    // Set up click events for all existing product cards
    function setupProductCardClickEvents() {
        const allProductCards = document.querySelectorAll('.product-card');
        allProductCards.forEach(card => {
            // Remove any existing click listeners to avoid duplicates
            card.replaceWith(card.cloneNode(true));
        });
        
        // Re-select the cards after cloning and add fresh event listeners
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.more-options')) {
                    const productData = JSON.parse(card.dataset.productData);
                    showProductDetail(productData);
                }
            });
        });
    }

    // Call the setup function after DOM is loaded
    setupProductCardClickEvents();

    backToShowcaseBtn.addEventListener('click', hideProductDetail);

    // Size and Color Popup Handlers
    const setupPopupHandlers = () => {
        // Size Popup
        addSizeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            sizePopup.style.display = 'block';
            colorPopup.style.display = 'none';
        });

        // Handle Size Selection
        const sizeOptions = document.querySelectorAll('.size-option');
        sizeOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                option.classList.toggle('selected');
            });
        });

        // Handle "All" checkboxes for sizes
        document.querySelectorAll('.size-category .select-all').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                e.stopPropagation();
                const category = e.target.closest('.size-category');
                const options = category.querySelectorAll('.size-option');
                
                if (e.target.checked) {
                    // Select all size options in this category
                    options.forEach(option => {
                        option.classList.add('selected');
                    });
                } else {
                    // Deselect all size options in this category
                    options.forEach(option => {
                        option.classList.remove('selected');
                    });
                }
            });
        });

        // Handle checkbox label clicks to ensure they trigger the checkbox
        document.querySelectorAll('.checkbox-label').forEach(label => {
            label.addEventListener('click', (e) => {
                e.stopPropagation();
                const checkbox = label.querySelector('.select-all');
                if (checkbox && e.target !== checkbox) {
                    checkbox.checked = !checkbox.checked;
                    checkbox.dispatchEvent(new Event('change'));
                }
            });
        });

        // Color Popup
        addColorBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            colorPopup.style.display = 'block';
            sizePopup.style.display = 'none';
        });

        // Handle Color Selection
        const colorOptions = document.querySelectorAll('.color-option');
        colorOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                option.classList.toggle('selected');
            });
        });

        // Handle Color Search
        const colorSearchInput = document.querySelector('.color-search-input');
        if (colorSearchInput) {
            colorSearchInput.addEventListener('input', (e) => {
                e.stopPropagation();
                const searchTerm = e.target.value.toLowerCase();
                const colorOptions = document.querySelectorAll('.color-option');
                
                colorOptions.forEach(option => {
                    const colorName = option.querySelector('span').textContent.toLowerCase();
                    if (colorName.includes(searchTerm)) {
                        option.style.display = 'flex';
                    } else {
                        option.style.display = 'none';
                    }
                });
            });
        }

        // Handle Add buttons in popups
        document.querySelectorAll('.popup-footer .add-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const popup = e.target.closest('.size-popup, .color-popup');
                const chipContainer = popup.closest('.form-group').querySelector('.chip-container');
                const selectedOptions = popup.querySelectorAll('.selected');
                
                // Remove existing chips except "All" and the add button
                Array.from(chipContainer.children).forEach(child => {
                    if (!child.classList.contains('add-chip') && !child.classList.contains('all-chip')) {
                        child.remove();
                    }
                });

                // Make sure "All" chip exists and has proper styling
                let allChip = chipContainer.querySelector('.all-chip');
                if (!allChip) {
                    allChip = document.createElement('div');
                    allChip.className = 'chip all-chip';
                    allChip.textContent = 'All';
                    chipContainer.insertBefore(allChip, chipContainer.firstChild);
                }

                // Add new chips for selected options
                selectedOptions.forEach(option => {
                    const isColorOption = option.classList.contains('color-option');
                    if (isColorOption) {
                        const colorName = option.querySelector('span').textContent;
                        const colorSwatch = option.querySelector('.color-swatch');
                        const colorValue = window.getComputedStyle(colorSwatch, '::before').backgroundColor;
                        
                        const chip = document.createElement('div');
                        chip.className = 'chip color-chip';
                        
                        const colorSwatchChip = document.createElement('div');
                        colorSwatchChip.className = 'chip-color-swatch';
                        colorSwatchChip.style.backgroundColor = colorValue;
                        chip.appendChild(colorSwatchChip);
                        
                        const text = document.createElement('span');
                        text.textContent = colorName;
                        chip.appendChild(text);
                        
                        const closeBtn = document.createElement('button');
                        closeBtn.className = 'chip-close-btn';
                        closeBtn.innerHTML = '×';
                        
                        closeBtn.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            chip.remove();
                        });
                        
                        chip.appendChild(closeBtn);
                        chipContainer.insertBefore(chip, chipContainer.lastElementChild);
                    } else if (option.textContent !== 'All') {
                        const chip = document.createElement('div');
                        chip.className = 'chip';
                        
                        const text = document.createElement('span');
                        text.textContent = option.textContent;
                        chip.appendChild(text);
                        
                        const closeBtn = document.createElement('button');
                        closeBtn.className = 'chip-close-btn';
                        closeBtn.innerHTML = '×';
                        
                        closeBtn.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            chip.remove();
                        });
                        
                        chip.appendChild(closeBtn);
                        chipContainer.insertBefore(chip, chipContainer.lastElementChild);
                    }
                });

                popup.style.display = 'none';
            });
        });

        // Prevent popup from closing when clicking inside it
        document.querySelectorAll('.size-popup, .color-popup').forEach(popup => {
            popup.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });

        // Close popups when clicking outside - using overlay approach
        overlay.addEventListener('click', (e) => {
            // Only close popups if the overlay itself is clicked (not the side panel)
            if (e.target === overlay) {
                sizePopup.style.display = 'none';
                colorPopup.style.display = 'none';
            }
        });

        // Additional document click handler for popup closing
        document.addEventListener('click', (e) => {
            // Check if click is outside both the popup and its trigger button
            const clickedInsideSizePopup = e.target.closest('.size-popup');
            const clickedSizeButton = e.target.closest('#addSizeBtn');
            const clickedInsideColorPopup = e.target.closest('.color-popup');
            const clickedColorButton = e.target.closest('#addColorBtn');
            const clickedInsideSidePanel = e.target.closest('.side-panel');

            // Close size popup if clicking outside and popup is visible
            if (!clickedInsideSizePopup && !clickedSizeButton && clickedInsideSidePanel && 
                sizePopup.style.display !== 'none' && sizePopup.style.display !== '') {
                sizePopup.style.display = 'none';
            }

            // Close color popup if clicking outside and popup is visible
            if (!clickedInsideColorPopup && !clickedColorButton && clickedInsideSidePanel && 
                colorPopup.style.display !== 'none' && colorPopup.style.display !== '') {
                colorPopup.style.display = 'none';
            }
        });

        // Prevent side panel from closing when clicking inside it
        sidePanel.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    };

    function openPanel() {
        sidePanel.classList.remove('hidden');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        setupPopupHandlers(); // Setup popup handlers when panel opens
    }

    function closePanel() {
        sidePanel.classList.add('hidden');
        overlay.classList.add('hidden');
        document.body.style.overflow = 'auto';
        productForm.reset();
    }

    createProductBtn.addEventListener('click', openPanel);
    closePanelBtn.addEventListener('click', closePanel);
    cancelBtn.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);

    // Form Submission
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate required fields
        const requiredFields = productForm.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
        
        if (isValid) {
            // Get the style name from the form
            const styleName = document.getElementById('styleName').value.trim() || 'New Product';
            const category = document.getElementById('category').value || 'Apparel';
            
            // Create a new product card
            const newProduct = {
                name: styleName,
                category: category,
                variants: Math.floor(Math.random() * 6) + 3, // Random variants between 3-8
                companyInitial: styleName.charAt(0).toUpperCase() || 'N'
            };
            
            // Create the product card element
            const card = document.createElement('div');
            card.className = 'product-card';
            
            card.innerHTML = `
                <div class="product-image">
                    <div class="image-dots">
                        <span class="dot active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <div class="variant-badge">+${newProduct.variants}</div>
                    <button class="more-options">
                        <span class="material-icons-outlined">more_vert</span>
                    </button>
                </div>
                <div class="product-info">
                    <div class="company-icon">${newProduct.companyInitial}</div>
                    <div class="product-details">
                        <h3>${newProduct.name}</h3>
                        <p>${newProduct.category}</p>
                    </div>
                </div>
            `;
            
            // Add the new card to the beginning of the product grid
            productGrid.insertBefore(card, productGrid.firstChild);
            
            // Store product data for detail view
            card.dataset.productData = JSON.stringify({
                name: styleName,
                styleNumber: document.getElementById('styleNumber').value || '-',
                category: category,
                gender: document.getElementById('gender').value || '-',
                season: document.getElementById('season').value || '-',
                description: document.getElementById('description').value || '-',
                sizes: Array.from(document.querySelectorAll('.chip-container .chip')).map(chip => chip.textContent).filter(text => text !== '+'),
                colors: Array.from(document.querySelectorAll('.chip-container .chip-color-swatch')).map(swatch => ({
                    name: swatch.nextElementSibling?.textContent || 'Color',
                    value: swatch.style.backgroundColor
                })),
                fabric: document.getElementById('fabric').value || '-',
                liningFabric: document.getElementById('liningFabric').value || '-',
                finishCoating: document.getElementById('finishCoating').value || '-',
                measurement: document.getElementById('measurement').value || '-',
                constructionNotes: document.getElementById('constructionNotes').value || '-',
                seamDetails: document.getElementById('seamDetails').value || '-',
                sampleSize: document.getElementById('sampleSize').value || '-',
                dutyRate: document.getElementById('dutyRate').value ? `$${document.getElementById('dutyRate').value}` : '-',
                miscCost: document.getElementById('miscCost').value ? `$${document.getElementById('miscCost').value}` : '-',
                listPrice: document.getElementById('listPrice').value ? `$${document.getElementById('listPrice').value}` : '-',
                isNewProduct: true
            });
            
            // Add click event to the new card
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.more-options')) {
                    showProductDetail(JSON.parse(card.dataset.productData));
                }
            });
            
            // Here you would typically send the form data to your backend
            console.log('New product created:', newProduct);
            closePanel();
        }
    });

    // Unit Toggle
    const unitToggle = document.getElementById('unitToggle');
    unitToggle.addEventListener('change', (e) => {
        const isMetric = e.target.checked;
        // Here you can handle the unit conversion logic
        console.log(`Switched to ${isMetric ? 'Metric' : 'Imperial'} units`);
    });
}); 