// Khởi tạo dữ liệu sản phẩm
const products = [
    // Hãng Dell
    {
        name: "Laptop Dell XPS 13",
        price: 22000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2021_9_15_637673094740972079_dell-xps-13-9310-2in1-bac-dd.jpg",
        brand: "Dell",
        details: {
            screen: "13.3 inch",
            cpu: "Intel Core i7",
            ram: "16GB",
            storage: "512GB SSD",
            weight: "1.2kg",
        },
    },
    {
        name: "Laptop Dell Inspiron 15",
        price: 18000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/dell_inspiron_15_3520_silver_514aecbbe9.png",
        brand: "Dell",
        details: {
            screen: "15.6 inch",
            cpu: "Intel Core i5",
            ram: "8GB",
            storage: "1TB HDD",
            weight: "2.0kg",
        },
    },
    {
        name: "Laptop Dell G5 15",
        price: 25000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2021_9_17_637674999026443727_dell-gaming-g15-5515-r7-5800h-xam-rtx-3050ti-dd.jpg",
        brand: "Dell",
        details: {
            screen: "15.6 inch",
            cpu: "Intel Core i5",
            ram: "16GB",
            storage: "512GB SSD",
            weight: "2.3kg",
        },
    },
    {
        name: "Laptop Dell Vostro 3405",
        price: 16000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/00909839_dell_vostro_3420_gray_88f0e892df.jpg",
        brand: "Dell",
        details: {
            screen: "14 inch",
            cpu: "AMD Ryzen 5",
            ram: "8GB",
            storage: "256GB SSD",
            weight: "1.5kg",
        },
    },
    {
        name: "Laptop Dell Latitude 7420",
        price: 35000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/dell_latitude_15_3540_9950b79986.png",
        brand: "Dell",
        details: {
            screen: "14 inch",
            cpu: "Intel Core i7",
            ram: "16GB",
            storage: "512GB SSD",
            weight: "1.3kg",
        },
    },

    // Hãng Apple
    {
        name: "Laptop MacBook Air M1",
        price: 28000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2021_10_20_637703174146015116_macbook-pro-16-2021-xam-dd.jpg",
        brand: "Apple",
        details: {
            screen: "13.3 inch",
            cpu: "Apple M1",
            ram: "8GB",
            storage: "256GB SSD",
            weight: "1.29kg",
        },
    },
    {
        name: "Laptop MacBook Pro 13",
        price: 38000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2019_5_31_636948957624237933_macbook-pro--touch-bar-2019-dd.png",
        brand: "Apple",
        details: {
            screen: "13.3 inch",
            cpu: "Apple M1",
            ram: "8GB",
            storage: "512GB SSD",
            weight: "1.4kg",
        },
    },
    {
        name: "Laptop MacBook Pro 16",
        price: 45000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2021_10_20_637703174145702717_macbook-pro-16-2021-bac-dd.jpg",
        brand: "Apple",
        details: {
            screen: "16 inch",
            cpu: "Apple M1 Pro",
            ram: "16GB",
            storage: "1TB SSD",
            weight: "2.0kg",
        },
    },
    {
        name: "Laptop MacBook Pro 14",
        price: 42000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2023_2_8_638114687684739517_macbook-pro-14-2023-m2-pro-xam-dd.jpg",
        brand: "Apple",
        details: {
            screen: "14 inch",
            cpu: "Apple M1 Pro",
            ram: "16GB",
            storage: "512GB SSD",
            weight: "1.4kg",
        },
    },
    {
        name: "Laptop MacBook Pro 13 (2022)",
        price: 39000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/2023_11_1_638344477190715811_macbook-pro-14-2023-m3-pro-max-bac-dd.jpg",
        brand: "Apple",
        details: {
            screen: "13.3 inch",
            cpu: "Apple M2",
            ram: "8GB",
            storage: "256GB SSD",
            weight: "1.29kg",
        },
    },

    // Hãng ASUS
    {
        name: "Laptop ASUS ROG Zephyrus G14",
        price: 35000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/2023_6_8_638218444149263882_asus-gaming-rog-zephyrus-gu603-xam-dd.jpg",
        brand: "ASUS",
        details: {
            screen: "14 inch",
            cpu: "AMD Ryzen 9",
            ram: "32GB",
            storage: "1TB SSD",
            weight: "1.6kg",
        },
    },
    {
        name: "Laptop ASUS ROG Strix G15",
        price: 30000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/rog_strix_g16_2023_g614_53a717d385.png",
        brand: "ASUS",
        details: {
            screen: "15.6 inch",
            cpu: "Intel Core i7",
            ram: "16GB",
            storage: "512GB SSD",
            weight: "2.3kg",
        },
    },
    {
        name: "Laptop ASUS VivoBook 14",
        price: 18000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/2023_4_19_638175167852601623_asus-vivobook-a1505va-l1113w-i5-13500h-bac-dd.jpg",
        brand: "ASUS",
        details: {
            screen: "14 inch",
            cpu: "Intel Core i5",
            ram: "8GB",
            storage: "512GB SSD",
            weight: "1.4kg",
        },
    },
    {
        name: "Laptop ASUS ZenBook 13",
        price: 22000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2022_6_17_637910625724083955_asus-zenbook-flip-up5401-xam-dd.jpg",
        brand: "ASUS",
        details: {
            screen: "13.3 inch",
            cpu: "Intel Core i7",
            ram: "16GB",
            storage: "1TB SSD",
            weight: "1.2kg",
        },
    },
    {
        name: "Laptop ASUS TUF Gaming A15",
        price: 28000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2022_3_22_637835505057970864_asus-tuf-gaming-fx507-xam-dd-rtx-3050.jpg",
        brand: "ASUS",
        details: {
            screen: "15.6 inch",
            cpu: "AMD Ryzen 7",
            ram: "16GB",
            storage: "1TB HDD",
            weight: "2.4kg",
        },
    },

    // Hãng Lenovo
    {
        name: "Laptop Lenovo ThinkPad X1 Carbon",
        price: 33000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/2024_5_25_638522262447075611_21jk00h5vn-thumb.jpg",
        brand: "Lenovo",
        details: {
            screen: "14 inch",
            cpu: "Intel Core i7",
            ram: "16GB",
            storage: "1TB SSD",
            weight: "1.1kg",
        },
    },
    {
        name: "Laptop Lenovo IdeaPad 3",
        price: 15000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/2023_9_14_638302841092557960_lenovo-ideapad-1-15alc7-r5-5500u-dd.jpg",
        brand: "Lenovo",
        details: {
            screen: "15.6 inch",
            cpu: "Intel Core i5",
            ram: "8GB",
            storage: "512GB SSD",
            weight: "1.8kg",
        },
    },
    {
        name: "Laptop Lenovo Legion 5",
        price: 28000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/lenovo_legion_7_16irx9_eclipse_black_1_edfb6434bf.png",
        brand: "Lenovo",
        details: {
            screen: "15.6 inch",
            cpu: "AMD Ryzen 7",
            ram: "16GB",
            storage: "1TB SSD",
            weight: "2.2kg",
        },
    },
    {
        name: "Laptop Lenovo ThinkPad E14",
        price: 21000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/2024_5_25_638522262447075611_21jk00h5vn-thumb.jpg",
        brand: "Lenovo",
        details: {
            screen: "14 inch",
            cpu: "Intel Core i5",
            ram: "16GB",
            storage: "512GB SSD",
            weight: "1.5kg",
        },
    },
    {
        name: "Laptop Lenovo Yoga Slim 7",
        price: 26000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/2024_5_15_638513684745192166_lenovo-yoga-slim-7-14imh9-luna-grey-thumb.jpg",
        brand: "Lenovo",
        details: {
            screen: "14 inch",
            cpu: "AMD Ryzen 5",
            ram: "16GB",
            storage: "1TB SSD",
            weight: "1.4kg",
        },
    },

    // Hãng HP
    {
        name: "Laptop HP Spectre x360",
        price: 24000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/00908901_hp_245_g10_a20tfpt_9ce2c339f9.png",
        brand: "HP",
        details: {
            screen: "13.3 inch",
            cpu: "Intel Core i5",
            ram: "8GB",
            storage: "256GB SSD",
            weight: "1.3kg",
        },
    },
    {
        name: "Laptop HP Pavilion 15",
        price: 20000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2019_12_19_637123526490969649_hp-pavilion-14-ce-vang-dd.png",
        brand: "HP",
        details: {
            screen: "15.6 inch",
            cpu: "Intel Core i5",
            ram: "8GB",
            storage: "512GB SSD",
            weight: "1.8kg",
        },
    },
    {
        name: "Laptop HP Omen 15",
        price: 29000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2021_9_21_637678442634060088_hp-gaming-omen-16-rtx-3060-dd.jpg",
        brand: "HP",
        details: {
            screen: "15.6 inch",
            cpu: "Intel Core i7",
            ram: "16GB",
            storage: "1TB SSD",
            weight: "2.5kg",
        },
    },
    {
        name: "Laptop HP Envy x360",
        price: 22000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/2023_7_3_638239958740174165_hp-envy-x360-xanh-dd.jpg",
        brand: "HP",
        details: {
            screen: "15.6 inch",
            cpu: "AMD Ryzen 5",
            ram: "16GB",
            storage: "512GB SSD",
            weight: "1.6kg",
        },
    },
    {
        name: "Laptop HP ProBook 450 G8",
        price: 24000000,
        image: "https://cdn2.fptshop.com.vn/unsafe/150x0/filters:quality(100)/2022_12_7_638060321400587990_hp-15s-fq5161tu-xanh-dd.jpg",
        brand: "HP",
        details: {
            screen: "15.6 inch",
            cpu: "Intel Core i5",
            ram: "8GB",
            storage: "256GB SSD",
            weight: "1.7kg",
        },
    },
];

// Hiển thị sản phẩm
function displayProducts() {
    const productContainer = document.getElementById("product-list");
    products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product-item");

        productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>Giá: ${product.price.toLocaleString()} VNĐ</p>
        <p>Hãng: ${product.brand}</p>
        <p>Màn hình: ${product.details.screen}</p>
        <p>CPU: ${product.details.cpu}</p>
        <p>RAM: ${product.details.ram}</p>
        <p>Ổ cứng: ${product.details.storage}</p>
        <p>Cân nặng: ${product.details.weight}</p>
      `;

        productContainer.appendChild(productElement);
    });
}

// Gọi hàm để hiển thị sản phẩm khi trang được tải
document.addEventListener("DOMContentLoaded", displayProducts);