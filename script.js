
// ============================================================
// PRODUCTS DATA
// ============================================================
const products = [
    { id: 1,   name: 'ASUS ROG Strix GPU',          price: 1299, rating: 4.5, image: 'img/gpu1.jpg',          brand: 'asus',        category: 'gpu'         },
    { id: 2,   name: 'MSI Gaming Pro Laptop',        price: 1499, rating: 4.7, image: 'img/bundle1.jpg',       brand: 'msi',         category: 'laptop'      },
    { id: 3,   name: 'AMD Ryzen 7 5800X CPU',        price: 999,  rating: 4.3, image: 'img/cpu1.jpg',          brand: 'amd',         category: 'cpu'         },
    { id: 4,   name: 'Intel Core i7-13700K CPU',     price: 1199, rating: 4.4, image: 'img/cpu2.jpg',          brand: 'intel',       category: 'cpu'         },
    { id: 5,   name: 'Razer BlackWidow Keyboard',    price: 199,  rating: 4.8, image: 'img/keyboard1.jpg',     brand: 'razer',       category: 'keyboard'    },
    { id: 6,   name: 'Logitech G502 Mouse',          price: 79,   rating: 4.2, image: 'img/mouse1.jpg',        brand: 'logitech',    category: 'mouse'       },
    { id: 7,   name: 'NVIDIA RTX 3080 GPU',          price: 699,  rating: 4.9, image: 'img/gpu2.jpg',          brand: 'nvidia',      category: 'gpu'         },
    { id: 8,   name: 'Samsung 27" Monitor',          price: 349,  rating: 4.6, image: 'img/monitor1.jpg',      brand: 'samsung',     category: 'monitor'     },
    { id: 9,   name: 'Corsair 4000D Case',           price: 149,  rating: 4.1, image: 'img/case1.jpg',         brand: 'corsair',     category: 'case'        },
    { id: 10,  name: 'EVGA 650W Power Supply',       price: 129,  rating: 4.0, image: 'img/psu1.jpg',          brand: 'evga',        category: 'psu'         },
    { id: 11,  name: 'WD Black SN770 SSD 1TB',       price: 89,   rating: 4.5, image: 'img/ssd1.jpg',          brand: 'wd',          category: 'ssd'         },
    { id: 12,  name: 'Kingston Fury 16GB RAM',       price: 159,  rating: 4.3, image: 'img/ram1.jpg',          brand: 'kingston',    category: 'ram'         },
    { id: 13,  name: 'Cooler Master Hyper 212',      price: 49,   rating: 3.9, image: 'img/cooler1.jpg',       brand: 'coolermaster',category: 'cooler'      },
    { id: 14,  name: 'ASRock B550M Motherboard',     price: 179,  rating: 4.2, image: 'img/motherboard1.jpg',  brand: 'asrock',      category: 'motherboard' },
    { id: 15,  name: 'Gigabyte RX 6700 XT GPU',      price: 599,  rating: 4.7, image: 'img/gpu3.jpg',          brand: 'gigabite',    category: 'gpu'         },
    { id: 16,  name: 'SteelSeries Arctis Headset',   price: 129,  rating: 4.4, image: 'img/headset1.jpg',      brand: 'steelseries', category: 'headset'     },
    { id: 17,  name: 'BenQ 144Hz Display',           price: 299,  rating: 4.5, image: 'img/monitor2.jpg',      brand: 'benq',        category: 'monitor'     },
    { id: 18,  name: 'Fractal Define 7 Case',        price: 169,  rating: 4.6, image: 'img/case2.jpg',         brand: 'fractal',     category: 'case'        },
    { id: 19,  name: 'Seasonic Focus 750W PSU',      price: 139,  rating: 4.3, image: 'img/psu2.jpg',          brand: 'seasonic',    category: 'psu'         },
    { id: 20,  name: 'Crucial P3 SSD 500GB',         price: 99,   rating: 4.1, image: 'img/ssd2.jpg',          brand: 'crucial',     category: 'ssd'         },
    { id: 21,  name: 'NVIDIA RTX 4090 GPU',          price: 8999, rating: 4.9, image: 'img/gpu4.jpg',          brand: 'nvidia',      category: 'gpu'         },
    { id: 22,  name: 'AMD Radeon RX 7900 XTX',       price: 3499, rating: 4.8, image: 'img/gpu5.jpg',          brand: 'amd',         category: 'gpu'         },
    { id: 23,  name: 'Intel Core i9-14900K CPU',     price: 2199, rating: 4.7, image: 'img/cpu3.jpg',          brand: 'intel',       category: 'cpu'         },
    { id: 24,  name: 'AMD Ryzen 9 7950X CPU',        price: 3299, rating: 4.8, image: 'img/cpu4.jpg',          brand: 'amd',         category: 'cpu'         },
    { id: 25,  name: 'ASUS ROG Maximus Z790',        price: 1899, rating: 4.6, image: 'img/motherboard2.jpg',  brand: 'asus',        category: 'motherboard' },
    { id: 26,  name: 'MSI MEG Z790 ACE MB',          price: 2299, rating: 4.5, image: 'img/motherboard3.jpg',  brand: 'msi',         category: 'motherboard' },
    { id: 27,  name: 'G.Skill Trident Z5 32GB',      price: 599,  rating: 4.7, image: 'img/ram2.jpg',          brand: 'gskill',      category: 'ram'         },
    { id: 28,  name: 'Corsair Vengeance 64GB RAM',   price: 899,  rating: 4.6, image: 'img/ram3.jpg',          brand: 'corsair',     category: 'ram'         },
    { id: 29,  name: 'Samsung 990 Pro 2TB SSD',      price: 699,  rating: 4.9, image: 'img/ssd3.jpg',          brand: 'samsung',     category: 'ssd'         },
    { id: 30,  name: 'WD Black SN850X 4TB SSD',      price: 1299, rating: 4.8, image: 'img/ssd4.jpg',          brand: 'wd',          category: 'ssd'         },
    { id: 31,  name: 'NVIDIA RTX 4060 Ti GPU',       price: 2199, rating: 4.6, image: 'img/gpu6.jpg',          brand: 'nvidia',      category: 'gpu'         },
    { id: 32,  name: 'NVIDIA RTX 4070 GPU',          price: 3299, rating: 4.7, image: 'img/gpu7.jpg',          brand: 'nvidia',      category: 'gpu'         },
    { id: 33,  name: 'AMD RX 7600 GPU',              price: 1199, rating: 4.4, image: 'img/gpu8.jpg',          brand: 'amd',         category: 'gpu'         },
    { id: 34,  name: 'AMD RX 6600 GPU',              price: 799,  rating: 4.3, image: 'img/gpu9.jpg',          brand: 'amd',         category: 'gpu'         },
    { id: 35,  name: 'Intel Core i5-13600K CPU',     price: 1099, rating: 4.5, image: 'img/cpu5.jpg',          brand: 'intel',       category: 'cpu'         },
    { id: 36,  name: 'Intel Core i9-13900K CPU',     price: 2799, rating: 4.8, image: 'img/cpu6.jpg',          brand: 'intel',       category: 'cpu'         },
    { id: 37,  name: 'AMD Ryzen 5 7600X CPU',        price: 899,  rating: 4.5, image: 'img/cpu7.jpg',          brand: 'amd',         category: 'cpu'         },
    { id: 38,  name: 'AMD Ryzen 7 7700X CPU',        price: 1499, rating: 4.6, image: 'img/cpu8.jpg',          brand: 'amd',         category: 'cpu'         },
    { id: 39,  name: 'Gigabyte Z790 Aorus Elite',    price: 1499, rating: 4.5, image: 'img/motherboard4.jpg',  brand: 'gigabite',    category: 'motherboard' },
    { id: 40,  name: 'ASUS TUF B650-Plus MB',        price: 799,  rating: 4.4, image: 'img/motherboard5.jpg',  brand: 'asus',        category: 'motherboard' },
    { id: 41,  name: 'Corsair Dominator 32GB RAM',   price: 499,  rating: 4.7, image: 'img/ram4.jpg',          brand: 'corsair',     category: 'ram'         },
    { id: 42,  name: 'Kingston Fury Beast 32GB',     price: 349,  rating: 4.5, image: 'img/ram5.jpg',          brand: 'kingston',    category: 'ram'         },
    { id: 43,  name: 'Crucial T700 2TB SSD',         price: 799,  rating: 4.6, image: 'img/ssd5.jpg',          brand: 'crucial',     category: 'ssd'         },
    { id: 44,  name: 'Seagate Barracuda 4TB HDD',    price: 349,  rating: 4.1, image: 'img/ssd6.jpg',          brand: 'seagate',     category: 'hdd'         },
    { id: 45,  name: 'be quiet! Dark Rock Pro 4',    price: 299,  rating: 4.8, image: 'img/cooler2.jpg',       brand: 'bequiet',     category: 'cooler'      },
    { id: 46,  name: 'NZXT Kraken X63 360mm AIO',   price: 699,  rating: 4.6, image: 'img/cooler3.jpg',       brand: 'nzxt',        category: 'cooler'      },
    { id: 47,  name: 'Corsair RM850x 850W PSU',      price: 549,  rating: 4.7, image: 'img/psu3.jpg',          brand: 'corsair',     category: 'psu'         },
    { id: 48,  name: 'Logitech G Pro X Mouse',       price: 349,  rating: 4.6, image: 'img/mouse2.jpg',        brand: 'logitech',    category: 'mouse'       },
    { id: 49,  name: 'SteelSeries Apex Pro KB',      price: 699,  rating: 4.7, image: 'img/keyboard2.jpg',     brand: 'steelseries', category: 'keyboard'    },
    { id: 50,  name: 'ASUS ROG Swift 27" Monitor',   price: 2499, rating: 4.8, image: 'img/monitor3.jpg',      brand: 'asus',        category: 'monitor'     },
    { id: 51,  name: 'Razer DeathAdder V3 Mouse',    price: 299,  rating: 4.6, image: 'img/mouse3.jpg',        brand: 'razer',       category: 'mouse'       },
    { id: 52,  name: 'MSI MAG B650 Motherboard',     price: 699,  rating: 4.4, image: 'img/motherboard1.jpg',  brand: 'msi',         category: 'motherboard' },
    { id: 53,  name: 'Corsair Vengeance 32GB RAM',   price: 349,  rating: 4.5, image: 'img/ram6.jpg',          brand: 'corsair',     category: 'ram'         },
    { id: 54,  name: 'Samsung 990 Pro SSD 2TB',      price: 499,  rating: 4.8, image: 'img/ssd6.jpg',          brand: 'samsung',     category: 'ssd'         },
    { id: 55,  name: 'NVIDIA RTX 4090 GPU',          price: 6999, rating: 4.9, image: 'img/gpu10.jpg',         brand: 'nvidia',      category: 'gpu'         },
    { id: 56,  name: 'AMD Ryzen 9 7950X CPU',        price: 2499, rating: 4.8, image: 'img/cpu1.jpg',          brand: 'amd',         category: 'cpu'         },
    { id: 57,  name: 'Logitech G Pro X Keyboard',    price: 549,  rating: 4.7, image: 'img/keyboard3.jpg',     brand: 'logitech',    category: 'keyboard'    },
    { id: 58,  name: 'ASUS TUF Gaming Monitor 27"',  price: 1299, rating: 4.5, image: 'img/monitor4.jpg',      brand: 'asus',        category: 'monitor'     },
    { id: 59,  name: 'Gigabyte RX 7900 XT GPU',      price: 3299, rating: 4.6, image: 'img/gpu1.jpg',          brand: 'gigabite',    category: 'gpu'         },
    { id: 60,  name: 'Intel Core i9-14900K CPU',     price: 2199, rating: 4.7, image: 'img/cpu2.jpg',          brand: 'intel',       category: 'cpu'         },
    { id: 61,  name: 'Razer Basilisk V3 Mouse',      price: 249,  rating: 4.5, image: 'img/mouse4.jpg',        brand: 'razer',       category: 'mouse'       },
    { id: 62,  name: 'Corsair RM1000x PSU',          price: 699,  rating: 4.6, image: 'img/psu4.jpg',          brand: 'corsair',     category: 'psu'         },
    { id: 63,  name: 'WD Black 4TB HDD',             price: 399,  rating: 4.2, image: 'img/ssd8.jpg',          brand: 'wd',          category: 'hdd'         },
    { id: 64,  name: 'MSI Optix MAG274 Monitor',     price: 999,  rating: 4.4, image: 'img/monitor5.jpg',      brand: 'msi',         category: 'monitor'     },
    { id: 65,  name: 'Kingston Fury Beast 32GB RAM',  price: 299,  rating: 4.4, image: 'img/ram7.jpg',          brand: 'kingston',    category: 'ram'         },
    { id: 66,  name: 'Logitech G435 Headset',        price: 249,  rating: 4.3, image: 'img/heatset2.jpg',      brand: 'logitech',    category: 'headset'     },
    { id: 67,  name: 'ASUS Prime X670E MB',          price: 1199, rating: 4.5, image: 'img/motherboard2.jpg',  brand: 'asus',        category: 'motherboard' },
    { id: 68,  name: 'Cooler Master MasterBox 500',  price: 299,  rating: 4.3, image: 'img/case3.jpg',         brand: 'coolermaster',category: 'case'        },
    { id: 69,  name: 'AMD Radeon RX 7600 GPU',       price: 999,  rating: 4.5, image: 'img/gpu2.jpg',          brand: 'amd',         category: 'gpu'         },
    { id: 70,  name: 'Samsung Odyssey G7 Monitor',   price: 1799, rating: 4.7, image: 'img/monitor6.jpg',      brand: 'samsung',     category: 'monitor'     },
    { id: 71,  name: 'Razer Kraken V3 Headset',      price: 349,  rating: 4.4, image: 'img/headset3.jpg',      brand: 'razer',       category: 'headset'     },
    { id: 72,  name: 'Intel Core i5-14600K CPU',     price: 999,  rating: 4.6, image: 'img/cpu3.jpg',          brand: 'intel',       category: 'cpu'         },
    { id: 73,  name: 'Gigabyte B650M Motherboard',   price: 549,  rating: 4.3, image: 'img/motherboard3.jpg',  brand: 'gigabite',    category: 'motherboard' },
    { id: 74,  name: 'Corsair H150i Elite Cooler',   price: 499,  rating: 4.6, image: 'img/cooler4.jpg',       brand: 'corsair',     category: 'cooler'      },
    { id: 75,  name: 'Logitech MX Master 3S Mouse',  price: 399,  rating: 4.8, image: 'img/mouse5.jpg',        brand: 'logitech',    category: 'mouse'       },
    { id: 76,  name: 'ASUS ROG Crosshair X670E MB',  price: 1599, rating: 4.7, image: 'img/motherboard4.jpg',  brand: 'asus',        category: 'motherboard' },
    { id: 77,  name: 'MSI MEG Z790 Motherboard',     price: 1299, rating: 4.6, image: 'img/motherboard5.jpg',  brand: 'msi',         category: 'motherboard' },
    { id: 78,  name: 'Razer Viper V2 Pro Mouse',     price: 499,  rating: 4.8, image: 'img/mouse6.jpg',        brand: 'razer',       category: 'mouse'       },
    { id: 79,  name: 'AMD Ryzen 5 7600X CPU',        price: 799,  rating: 4.5, image: 'img/cpu4.jpg',          brand: 'amd',         category: 'cpu'         },
    { id: 80,  name: 'Intel Core i7-14700K CPU',     price: 1599, rating: 4.6, image: 'img/cpu5.jpg',          brand: 'intel',       category: 'cpu'         },
    { id: 81,  name: 'Gigabyte RTX 4070 Ti GPU',     price: 2999, rating: 4.7, image: 'img/gpu3.jpg',          brand: 'gigabite',    category: 'gpu'         },
    { id: 82,  name: 'Corsair K100 RGB Keyboard',    price: 699,  rating: 4.6, image: 'img/keyboard4.jpg',     brand: 'corsair',     category: 'keyboard'    },
    { id: 83,  name: 'Samsung 32" Odyssey Monitor',  price: 2199, rating: 4.7, image: 'img/monitor7.jpg',      brand: 'samsung',     category: 'monitor'     },
    { id: 84,  name: 'WD Blue SN580 SSD 1TB',        price: 149,  rating: 4.4, image: 'img/ssd8.jpg',          brand: 'wd',          category: 'ssd'         },
    { id: 85,  name: 'Kingston Fury Renegade 32GB',  price: 399,  rating: 4.6, image: 'img/ram1.jpg',          brand: 'kingston',    category: 'ram'         },
    { id: 86,  name: 'Logitech G915 TKL Keyboard',   price: 649,  rating: 4.7, image: 'img/keyboard5.jpg',     brand: 'logitech',    category: 'keyboard'    },
    { id: 87,  name: 'NVIDIA RTX 4070 Super GPU',    price: 2599, rating: 4.8, image: 'img/gpu4.jpg',          brand: 'nvidia',      category: 'gpu'         },
    { id: 88,  name: 'ASUS ProArt 27" Monitor',      price: 1799, rating: 4.6, image: 'img/monitor8.jpg',      brand: 'asus',        category: 'monitor'     },
    { id: 89,  name: 'MSI Clutch GM41 Mouse',        price: 149,  rating: 4.3, image: 'img/mouse7.jpg',        brand: 'msi',         category: 'mouse'       },
    { id: 90,  name: 'Cooler Master V850 Gold PSU',  price: 449,  rating: 4.5, image: 'img/psu5.jpg',          brand: 'coolermaster',category: 'psu'         },
    { id: 91,  name: 'AMD Radeon RX 7900 XTX GPU',   price: 3999, rating: 4.8, image: 'img/gpu5.jpg',          brand: 'amd',         category: 'gpu'         },
    { id: 92,  name: 'Razer Huntsman V2 Keyboard',   price: 599,  rating: 4.6, image: 'img/keyboard6.jpg',     brand: 'razer',       category: 'keyboard'    },
    { id: 93,  name: 'Gigabyte Aorus 34" Monitor',   price: 2499, rating: 4.7, image: 'img/monitor9.jpg',      brand: 'gigabite',    category: 'monitor'     },
    { id: 94,  name: 'Intel Core i3-14100 CPU',      price: 399,  rating: 4.3, image: 'img/cpu6.jpg',          brand: 'intel',       category: 'cpu'         },
    { id: 95,  name: 'Corsair Sabre RGB Pro Mouse',  price: 199,  rating: 4.4, image: 'img/mouse8.jpg',        brand: 'corsair',     category: 'mouse'       },
    { id: 96,  name: 'Samsung 870 EVO SSD 2TB',      price: 349,  rating: 4.7, image: 'img/ssd1.jpg',          brand: 'samsung',     category: 'ssd'         },
    { id: 97,  name: 'ASUS ROG Strix B650E MB',      price: 899,  rating: 4.5, image: 'img/motherboard1.jpg',  brand: 'asus',        category: 'motherboard' },
    { id: 98,  name: 'MSI Optix G273 Monitor',       price: 699,  rating: 4.4, image: 'img/monitor10.jpg',     brand: 'msi',         category: 'monitor'     },
    { id: 99,  name: 'Logitech G502 X Plus Mouse',   price: 349,  rating: 4.6, image: 'img/mouse9.jpg',        brand: 'logitech',    category: 'mouse'       },
    { id: 100, name: 'AMD Ryzen 7 7700X CPU',        price: 1199, rating: 4.6, image: 'img/cpu7.jpg',          brand: 'amd',         category: 'cpu'         },
    { id: 101, name: 'Razer BlackShark V2 Headset',  price: 299,  rating: 4.5, image: 'img/headset4.jpg',      brand: 'razer',       category: 'headset'     },
    { id: 102, name: 'Corsair iCUE 5000X Case',      price: 549,  rating: 4.6, image: 'img/case4.jpg',         brand: 'corsair',     category: 'case'        },
    { id: 103, name: 'NVIDIA RTX 4080 Super GPU',    price: 4499, rating: 4.8, image: 'img/gpu6.jpg',          brand: 'nvidia',      category: 'gpu'         },
    { id: 104, name: 'Kingston NV3 SSD 2TB',         price: 199,  rating: 4.3, image: 'img/ssd2.jpg',          brand: 'kingston',    category: 'ssd'         },
    { id: 105, name: 'Gigabyte X670 Aorus Elite MB', price: 999,  rating: 4.5, image: 'img/motherboard2.jpg',  brand: 'gigabite',    category: 'motherboard' },
    { id: 106, name: 'Intel Arc A770 GPU',           price: 899,  rating: 4.2, image: 'img/gpu7.jpg',          brand: 'intel',       category: 'gpu'         },
    { id: 107, name: 'Logitech G733 Headset',        price: 349,  rating: 4.4, image: 'img/headset5.jpg',      brand: 'logitech',    category: 'headset'     },
    { id: 108, name: 'ASUS ROG Rapture GT-AX11000',  price: 1299, rating: 4.5, image: 'img/network1.jpg',      brand: 'asus',        category: 'networking'  },
    { id: 109, name: 'Intel Core i5-12400F CPU',     price: 749,  rating: 4.6, image: 'img/cpu8.jpg',          brand: 'intel',       category: 'cpu'         },
    { id: 110, name: 'MSI Gaming GS66 Stealth',      price: 3299, rating: 4.6, image: 'img/bundle2.jpg',       brand: 'msi',         category: 'laptop'      },
    { id: 111, name: 'MSI Radeon RX 6650 XT GPU',   price: 999,  rating: 4.4, image: 'img/gpu8.jpg',          brand: 'msi',         category: 'gpu'         },
    { id: 112, name: 'MSI Vigor GK50 Keyboard',      price: 249,  rating: 4.3, image: 'img/keyboard7.jpg',     brand: 'msi',         category: 'keyboard'    },
    { id: 113, name: 'Razer DeathStalker V2 KB',     price: 499,  rating: 4.5, image: 'img/keyboard8.jpg',     brand: 'razer',       category: 'keyboard'    },
    { id: 114, name: 'Razer Nari Ultimate Headset',  price: 449,  rating: 4.4, image: 'img/headset6.jpg',      brand: 'razer',       category: 'headset'     },
    { id: 115, name: 'Razer Blade 14 Laptop',        price: 5499, rating: 4.7, image: 'img/bundle1.jpg',       brand: 'razer',       category: 'laptop'      },
    { id: 116, name: 'NVIDIA RTX 4060 GPU',          price: 1599, rating: 4.5, image: 'img/gpu9.jpg',          brand: 'nvidia',      category: 'gpu'         },
    { id: 117, name: 'NVIDIA RTX 3070 Ti GPU',       price: 1299, rating: 4.6, image: 'img/gpu10.jpg',         brand: 'nvidia',      category: 'gpu'         },
    { id: 118, name: 'NVIDIA RTX 4090 FE GPU',       price: 7999, rating: 4.9, image: 'img/gpu1.jpg',          brand: 'nvidia',      category: 'gpu'         },
    { id: 119, name: 'Gigabyte RTX 4060 Ti GPU',     price: 2199, rating: 4.5, image: 'img/gpu2.jpg',          brand: 'gigabite',    category: 'gpu'         },
    { id: 120, name: 'Gigabyte Aorus 15 Laptop',     price: 3999, rating: 4.6, image: 'img/bundle2.jpg',       brand: 'gigabite',    category: 'laptop'      },
    { id: 121, name: 'Gigabyte B760M DS3H MB',       price: 449,  rating: 4.3, image: 'img/motherboard3.jpg',  brand: 'gigabite',    category: 'motherboard' },
    { id: 122, name: 'Logitech G Pro X 2 Mouse',     price: 499,  rating: 4.7, image: 'img/mouse10.jpg',       brand: 'logitech',    category: 'mouse'       },
    { id: 123, name: 'Logitech G Pro X Headset',     price: 299,  rating: 4.5, image: 'img/headset8.jpg',      brand: 'logitech',    category: 'headset'     },
];

// ============================================================
// AUTH – localStorage-based
// ============================================================
function getUser() {
    return JSON.parse(localStorage.getItem('authUser')) || null;
}
function setUser(user) {
    localStorage.setItem('authUser', JSON.stringify(user));
}

/** Update header user icon based on login state */
function updateAuthUI() {
    const user     = getUser();
    const userIcon = document.getElementById('userIcon');
    if (!userIcon) return;

    if (user) {
        userIcon.innerHTML = `👤 <span class="username-text">${user.username}</span>`;
    } else {
        userIcon.innerHTML = `👤`;
    }
    userIcon.style.cursor = 'pointer';
    userIcon.onclick = function () {
        if (!getUser()) openLogin();
        else openProfile();
    };
}

function doLogout() {
    localStorage.removeItem('authUser');
    closeProfile();
    updateAuthUI();
    showToast('Logged out successfully.', 'success');
    playNotificationSound();
}

// ============================================================
// PROFILE POPUP
// ============================================================
function createProfilePopupIfNeeded() {
    if (document.getElementById('profilePopup')) return;

    const overlay = document.createElement('div');
    overlay.id = 'profileOverlay';
    overlay.className = 'profile-overlay';
    overlay.onclick = closeProfile;
    document.body.appendChild(overlay);

    const popup = document.createElement('div');
    popup.id = 'profilePopup';
    popup.className = 'profile-popup';
    popup.innerHTML = `
        <button class="profile-close-btn" onclick="closeProfile()">✕</button>
        <div class="profile-avatar-circle" id="profileAvatarCircle">?</div>
        <div class="profile-display-name" id="profileDisplayName">—</div>
        <div class="profile-display-email" id="profileDisplayEmail">—</div>
        <div class="profile-card-divider"></div>
        <div class="profile-info-row">
            <span class="profile-info-label">📞 Phone</span>
            <span class="profile-info-value" id="profilePhone">—</span>
        </div>
        <div class="profile-info-row">
            <span class="profile-info-label">📅 Member Since</span>
            <span class="profile-info-value" id="profileMemberSince">—</span>
        </div>
        <div class="profile-info-row">
            <span class="profile-info-label">🔑 Signed in via</span>
            <span class="profile-info-value" id="profileProvider">—</span>
        </div>
        <button class="profile-logout-btn" onclick="doLogout()">Log Out</button>
    `;
    document.body.appendChild(popup);
}

function openProfile() {
    createProfilePopupIfNeeded();
    const user = getUser();
    if (!user) return;

    const initial = (user.username || '?')[0].toUpperCase();
    const providerColors = { google: '#ea4335', apple: '#111', email: '#4f46e5' };
    const providerLabel  = { google: 'Google', apple: 'Apple', email: 'Email / Password' };

    const circle = document.getElementById('profileAvatarCircle');
    circle.textContent = initial;
    circle.style.background = providerColors[user.provider] || '#4f46e5';

    document.getElementById('profileDisplayName').textContent    = user.username || '—';
    document.getElementById('profileDisplayEmail').textContent   = user.email    || '—';
    document.getElementById('profilePhone').textContent          = user.phone    || '—';
    document.getElementById('profileMemberSince').textContent    = user.memberSince || '—';
    document.getElementById('profileProvider').textContent       = providerLabel[user.provider] || 'Email / Password';

    document.getElementById('profileOverlay').style.display = 'block';
    document.getElementById('profilePopup').style.display   = 'flex';
}

function closeProfile() {
    const overlay = document.getElementById('profileOverlay');
    const popup   = document.getElementById('profilePopup');
    if (overlay) overlay.style.display = 'none';
    if (popup)   popup.style.display   = 'none';
}

/** Called by the Login button */
function doLogin() {
    const emailEl = document.getElementById('loginEmail');
    const passEl  = document.getElementById('loginPasswordInput');
    if (!emailEl || !passEl) return;

    const email = emailEl.value.trim();
    const pass  = passEl.value.trim();

    if (!email || !pass) {
        showToast('Please enter email and password.', 'error');
        return;
    }

    const registered = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const found = registered.find(u => u.email === email && u.password === pass);

    if (!found) {
        showToast('Invalid email or password.', 'error');
        return;
    }

    setUser({ email: found.email, username: found.username, memberSince: found.memberSince || '—', provider: found.provider || 'email' });
    closeLogin();
    updateAuthUI();
    showToast('Login successful!', 'success');
    playNotificationSound();

    // Resume pending action
    const pending = localStorage.getItem('pendingAction');
    if (pending === 'checkout') {
        localStorage.removeItem('pendingAction');
        setTimeout(() => { window.location.href = 'checkout.html'; }, 600);
    }
}

/** Called by the Sign Up button */
function doSignup() {
    const emailEl   = document.getElementById('signupEmailInput');
    const passEl    = document.getElementById('signupPasswordInput');
    const confirmEl = document.getElementById('confirmPassword');
    if (!emailEl || !passEl || !confirmEl) return;

    const email   = emailEl.value.trim();
    const pass    = passEl.value.trim();
    const confirm = confirmEl.value.trim();
    const username = email.split('@')[0];

    if (!email || !pass || !confirm) {
        showToast('Please fill in all fields.', 'error');
        return;
    }
    if (pass.length < 8) {
        showToast('Password must be at least 8 characters.', 'error');
        return;
    }
    if (pass.length > 16) {
        showToast('Password must be at most 16 characters.', 'error');
        return;
    }
    if (!/[A-Z]/.test(pass)) {
        showToast('Password must include at least one uppercase letter.', 'error');
        return;
    }
    if (!/[a-z]/.test(pass)) {
        showToast('Password must include at least one lowercase letter.', 'error');
        return;
    }
    if (!/[0-9]/.test(pass)) {
        showToast('Password must include at least one number.', 'error');
        return;
    }
    if (pass !== confirm) {
        showToast('Passwords do not match.', 'error');
        return;
    }

    const registered = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    if (registered.find(u => u.email === email)) {
        showToast('Email already registered.', 'error');
        return;
    }

    const memberSince = new Date().toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' });
    registered.push({ email, password: pass, username, memberSince, provider: 'email' });
    localStorage.setItem('registeredUsers', JSON.stringify(registered));

    // Auto-login after signup
    setUser({ email, username, memberSince, provider: 'email' });
    closeSignup();
    updateAuthUI();
    showToast('Sign up successful!', 'success');
    playNotificationSound();

    const pending = localStorage.getItem('pendingAction');
    if (pending === 'checkout') {
        localStorage.removeItem('pendingAction');
        setTimeout(() => { window.location.href = 'checkout.html'; }, 800);
    }
}

// ============================================================
// CART – localStorage-based
// ============================================================
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

/**
 * Add a product to cart.
 * productId  – number matching products array
 * variation  – string e.g. "Var 1" (optional)
 * qty        – quantity (default 1)
 */
function addItemToCart(productId, variation, qty) {
    qty = qty || 1;
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cart = getCart();
    const key  = productId + '_' + (variation || 'default');
    const existing = cart.find(item => item.key === key);

    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({
            key,
            id:        product.id,
            name:      product.name,
            price:     product.price,
            image:     product.image,
            variation: variation || '',
            qty
        });
    }

    saveCart(cart);
    updateCartBadge();
    showToast('Item successfully added', 'success');
    playNotificationSound();
}

function removeFromCart(key) {
    saveCart(getCart().filter(i => i.key !== key));
    updateCartBadge();
    renderCartPage();
}

function updateCartQty(key, delta) {
    const cart = getCart();
    const item = cart.find(i => i.key === key);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { removeFromCart(key); return; }
    saveCart(cart);
    renderCartPage();
}

/** Refresh all .cart-badge spans with the current item count */
function updateCartBadge() {
    const total = getCart().reduce((sum, i) => sum + i.qty, 0);
    document.querySelectorAll('.cart-badge').forEach(el => {
        el.textContent = total;
    });
}

// ============================================================
// CART PAGE – checkout guard
// ============================================================
function goCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    location.href = 'checkout.html';
}

// ============================================================
// CART PAGE – dynamic render
// ============================================================
function renderCartPage() {
    const container   = document.getElementById('cartItemsContainer');
    if (!container) return;

    const cart        = getCart();
    const totalDisplay = document.getElementById('cartTotalDisplay');

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center;padding:40px 0;color:#888;">Your cart is empty.</p>';
        if (totalDisplay) totalDisplay.textContent = 'RM 0.00';
        return;
    }

    container.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const lineTotal = item.price * item.qty;
        subtotal += lineTotal;

        const row = document.createElement('div');
        row.className = 'cart-item';
        row.innerHTML = `
            <div class="cart-product">
                <div class="cart-img">${item.image ? `<img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:contain;">` : ''}</div>
                <div>
                    <div style="font-weight:bold;font-size:13px;">${item.name}</div>
                    <div class="cart-desc">${item.variation || 'Standard'}</div>
                    <div class="cart-remove" onclick="removeFromCart('${item.key}')">Remove</div>
                </div>
            </div>
            <div class="cart-qty">
                <button onclick="updateCartQty('${item.key}', -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="updateCartQty('${item.key}', 1)">+</button>
            </div>
            <div class="cart-price">RM ${item.price.toFixed(2)}</div>
            <div class="cart-total">RM ${lineTotal.toFixed(2)}</div>
        `;
        container.appendChild(row);
    });

    if (totalDisplay) totalDisplay.textContent = `RM ${subtotal.toFixed(2)}`;
}

// ============================================================
// CHECKOUT PAGE – dynamic render + price calculation
// ============================================================
const SHIPPING_FEES = { standard: 4.90, economy: 3.60, express: 12.00, nextday: 18.00 };
let selectedShipping = null;
let appliedDiscount  = 0;

function renderCheckoutSummary() {
    const container = document.getElementById('checkoutItemsContainer');
    if (!container) return;

    const cart = getCart();
    container.innerHTML = '';
    let subtotal = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p style="font-size:12px;color:#888;padding:8px 0;">No items in cart.</p>';
    } else {
        cart.forEach(item => {
            const lineTotal = item.price * item.qty;
            subtotal += lineTotal;
            const row = document.createElement('div');
            row.className = 'summary-product-row';
            row.innerHTML = `
                <div class="summary-prod-detail">
                    <div class="summary-prod-img">${item.image ? `<img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:contain;">` : ''}</div>
                    <div>
                        <div class="summary-prod-name">${item.name}</div>
                        <div class="summary-prod-desc">${item.variation || 'Standard'}</div>
                    </div>
                </div>
                <div class="summary-prod-qty">x ${item.qty}</div>
                <div class="summary-prod-price">RM ${lineTotal.toFixed(2)}</div>
            `;
            container.appendChild(row);
        });
    }
    updateCheckoutTotals(subtotal);
}

function updateCheckoutTotals(subtotal) {
    if (subtotal === undefined) {
        subtotal = getCart().reduce((s, i) => s + i.price * i.qty, 0);
    }
    const shipping   = SHIPPING_FEES[selectedShipping] || 4.90;
    const discount   = appliedDiscount;
    const grandTotal = Math.max(0, subtotal + shipping - discount);

    const el = id => document.getElementById(id);
    if (el('checkoutSubtotal'))   el('checkoutSubtotal').textContent   = `RM ${subtotal.toFixed(2)}`;
    if (el('checkoutShipping'))   el('checkoutShipping').textContent   = `+ RM ${shipping.toFixed(2)}`;
    if (el('checkoutDiscount'))   el('checkoutDiscount').textContent   = `- RM ${discount.toFixed(2)}`;
    if (el('checkoutGrandTotal')) el('checkoutGrandTotal').textContent = `RM ${grandTotal.toFixed(2)}`;
}

function toggleShipping() {
    var items = document.getElementById('shippingItems');
    var arrow = document.getElementById('shippingArrow');
    if (!items) return;
    var open = items.style.display !== 'none';
    items.style.display = open ? 'none' : 'block';
    if (arrow) arrow.textContent = open ? '▼' : '▲';
}

function selectShipping(el) {
    document.querySelectorAll('#shippingItems .shipping-option').forEach(function(opt) {
        opt.classList.remove('active');
    });
    el.classList.add('active');

    // Update header label and show green dot
    var labelText = el.textContent.trim();
    var label = document.getElementById('shippingLabel');
    if (label) label.textContent = labelText;
    var headerDot = document.getElementById('shippingDot');
    if (headerDot) headerDot.style.display = 'inline';
    var errShipping = document.getElementById('errShipping');
    if (errShipping) errShipping.textContent = '';
    var toggle = document.getElementById('shippingToggle');
    if (toggle) toggle.style.borderColor = '';

    // Collapse after selection
    document.getElementById('shippingItems').style.display = 'none';
    var arrow = document.getElementById('shippingArrow');
    if (arrow) arrow.textContent = '▼';

    var text = el.textContent;
    if (text.includes('Standard'))      selectedShipping = 'standard';
    else if (text.includes('Economy'))  selectedShipping = 'economy';
    else if (text.includes('Express'))  selectedShipping = 'express';
    else if (text.includes('Next Day')) selectedShipping = 'nextday';
    updateCheckoutTotals();
}

function applyPromoCode() {
    const input = document.getElementById('promoInput');
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    const codes = { 'SAVE10': 10, 'SAVE20': 20, 'PC10': 10 };
    if (codes[code] !== undefined) {
        appliedDiscount = codes[code];
        showToast(`Promo applied! -RM${codes[code]}`, 'success');
    } else if (!code) {
        showToast('Please enter a promo code.', 'error');
    } else {
        appliedDiscount = 0;
        showToast('Invalid promo code.', 'error');
    }
    updateCheckoutTotals();
}

/** PLACE ORDER – requires login; clears cart on success */
function placeOrder() {
    // Field validation
    var valid = true;
    function validateField(id, errId, rules) {
        var input = document.getElementById(id);
        var err   = document.getElementById(errId);
        if (!input || !err) return;
        var val = input.value.trim();
        var msg = '';
        if (!val) {
            msg = rules.required;
        } else if (rules.pattern && !rules.pattern.test(val)) {
            msg = rules.formatMsg;
        } else if (rules.minLen && val.length < rules.minLen) {
            msg = rules.formatMsg;
        }
        if (msg) {
            err.textContent = msg;
            input.classList.add('input-error');
            valid = false;
        } else {
            err.textContent = '';
            input.classList.remove('input-error');
        }
    }

    validateField('inputFirstName', 'errFirstName', {
        required:  'First name is required',
        pattern:   /^[a-zA-Z\s'\-]+$/,
        formatMsg: 'First name must contain letters only'
    });
    validateField('inputLastName', 'errLastName', {
        required:  'Last name is required',
        pattern:   /^[a-zA-Z\s'\-]+$/,
        formatMsg: 'Last name must contain letters only'
    });
    validateField('inputEmail', 'errEmail', {
        required:  'Email is required',
        pattern:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        formatMsg: 'Enter a valid email (e.g. name@email.com)'
    });
    validateField('inputPhone', 'errPhone', {
        required:  'Phone number is required',
        pattern:   /^(\+?6?01)[0-46-9][0-9]{7,8}$/,
        formatMsg: 'Enter a valid Malaysian phone number (e.g. 0123456789)'
    });
    validateField('inputAddress1', 'errAddress1', {
        required:  'Address is required',
        minLen:    5,
        formatMsg: 'Please enter a valid address'
    });
    validateField('inputPostcode', 'errPostcode', {
        required:  'Postcode is required',
        pattern:   /^\d{5}$/,
        formatMsg: 'Postcode must be 5 digits (e.g. 50000)'
    });
    validateField('inputCity', 'errCity', {
        required:  'City is required',
        pattern:   /^[a-zA-Z\s\-]+$/,
        formatMsg: 'City must contain letters only'
    });
    // Shipping validation
    var errShipping = document.getElementById('errShipping');
    if (errShipping) {
        if (!selectedShipping) {
            errShipping.textContent = 'Please select a shipping method';
            document.getElementById('shippingToggle').style.borderColor = '#e53935';
            valid = false;
        } else {
            errShipping.textContent = '';
            document.getElementById('shippingToggle').style.borderColor = '';
        }
    }

    // State validation
    var stateText = document.getElementById('stateText');
    var errState  = document.getElementById('errState');
    if (stateText && errState) {
        if (stateText.textContent.trim() === 'State') {
            errState.textContent = 'Please select a state';
            document.getElementById('stateSelected').style.borderColor = '#e53935';
            valid = false;
        } else {
            errState.textContent = '';
            document.getElementById('stateSelected').style.borderColor = '';
        }
    }

    // Payment sub-item validation
    var errPayment = document.getElementById('errPayment');
    if (errPayment) {
        var paySubItem = (typeof selectedPaymentSubItem !== 'undefined') ? selectedPaymentSubItem : null;
        if (!paySubItem) {
            errPayment.textContent = 'Please select a payment method';
            valid = false;
        } else {
            errPayment.textContent = '';
        }
    }

    if (!valid) return;

    const user = getUser();
    if (!user) {
        localStorage.setItem('pendingAction', 'checkout');
        openLogin();
        return;
    }
    const cart = getCart();
    if (cart.length === 0) {
        showToast('Your cart is empty.', 'error');
        return;
    }

    // --- Build and save order data ---
    const _g = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    const _now = new Date();
    const _pad = n => String(n).padStart(2, '0');
    const _dateStr = `${_pad(_now.getDate())}/${_pad(_now.getMonth()+1)}/${_now.getFullYear()}`;
    const _orderId = 'OR' + _now.getFullYear() + _pad(_now.getMonth()+1) + _pad(_now.getDate())
                   + _pad(_now.getHours()) + _pad(_now.getMinutes()) + _pad(_now.getSeconds());

    // use the explicitly selected payment sub-item label
    let _payMethod = (typeof selectedPaymentLabel !== 'undefined' && selectedPaymentLabel) ? selectedPaymentLabel : 'Unknown';

    const _subtotal   = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const _shipCost   = SHIPPING_FEES[selectedShipping] || 4.90;
    const _shipLabel  = document.getElementById('shippingLabel') ? document.getElementById('shippingLabel').textContent : 'Standard Delivery - RM 4.90';
    const _grandTotal = Math.max(0, _subtotal + _shipCost - appliedDiscount);

    const _stateEl = document.getElementById('stateText');
    const _orderData = {
        orderId:       _orderId,
        orderDate:     _dateStr,
        customer: {
            firstName: _g('inputFirstName'),
            lastName:  _g('inputLastName'),
            email:     _g('inputEmail'),
            phone:     _g('inputPhone'),
            address1:  _g('inputAddress1'),
            postcode:  _g('inputPostcode'),
            city:      _g('inputCity'),
            state:     _stateEl ? _stateEl.textContent.trim() : ''
        },
        items: cart.map(item => ({
            name:      item.name,
            variation: item.variation || 'Standard',
            qty:       item.qty,
            price:     item.price,
            subtotal:  item.price * item.qty
        })),
        shipping:      { method: _shipLabel, cost: _shipCost },
        paymentMethod: _payMethod,
        subtotal:      _subtotal,
        discount:      appliedDiscount,
        grandTotal:    _grandTotal
    };
    // --- end order data ---

    // GrabPay → show failed popup; all others → success
    const _isGrabPay = (typeof selectedPaymentSubItem !== 'undefined') &&
                       selectedPaymentSubItem.toLowerCase().includes('grabpay');
    if (_isGrabPay) {
        document.getElementById('payFailedOverlay').style.display = 'block';
        document.getElementById('payFailedModal').style.display   = 'block';
        return;
    }

    localStorage.setItem('lastOrder', JSON.stringify(_orderData));
    saveCart([]);
    updateCartBadge();
    if (typeof showPaySuccess === 'function') {
        showPaySuccess(_orderData);
    }
}

// ============================================================
// SEARCH
// ============================================================
function searchProduct() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    window.location.href = `product-list.html?search=${encodeURIComponent(input.value)}`;
}

// ============================================================
// NOTIFICATION SOUND (Web Audio API)
// ============================================================
function playNotificationSound() {
    try {
        const AudioCtx = window.AudioContext || window['webkitAudioContext'];
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.35);
    } catch(e) {}
}

// ============================================================
// TOAST NOTIFICATION
// ============================================================
function showToast(message, type) {
    let toast = document.getElementById('globalToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'globalToast';
        document.body.appendChild(toast);
    }
    toast.className = 'global-toast toast-' + (type || 'success');
    toast.textContent = message;
    toast.style.display = 'block';
    toast.style.opacity = '1';
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => { toast.style.display = 'none'; }, 400);
    }, 3000);
}

// ============================================================
// PRODUCT LIST PAGE – paginated dynamic render
// ============================================================
let currentPage = 1;
let filteredProducts = [];

function getItemsPerPage() {
    return 10; // 5 columns × 2 rows
}

function renderProductList() {
    const keyword = (new URLSearchParams(window.location.search).get('search') || '').toLowerCase().trim();
    const sortName  = document.getElementById('sortName')?.value  || '';
    const sortPrice = document.getElementById('sortPrice')?.value || '';

    filteredProducts = products.filter(p =>
        !keyword ||
        p.name.toLowerCase().includes(keyword) ||
        p.brand.toLowerCase().includes(keyword) ||
        (p.category || '').toLowerCase().includes(keyword)
    );

    if (sortName === 'name_asc')         filteredProducts.sort((a,b) => a.name.localeCompare(b.name));
    else if (sortName === 'name_desc')   filteredProducts.sort((a,b) => b.name.localeCompare(a.name));
    if (sortPrice === 'price_low_high')  filteredProducts.sort((a,b) => a.price - b.price);
    else if (sortPrice === 'price_high_low') filteredProducts.sort((a,b) => b.price - a.price);

    renderPage(1);
}

function renderPage(page) {
    const grid = document.querySelector('.products-grid1');
    if (!grid) return;

    const total      = filteredProducts.length;
    const totalPages = Math.max(1, Math.ceil(total / getItemsPerPage()));
    currentPage      = Math.max(1, Math.min(page, totalPages));

    grid.innerHTML = '';

    if (total === 0) {
        const keyword = (new URLSearchParams(window.location.search).get('search') || '');
        const noRes = document.createElement('div');
        noRes.style.cssText = 'width:100%;text-align:center;padding:40px;grid-column:1/-1;color:#f1f5f9;';
        noRes.innerHTML = `
            <svg width="80" height="80" viewBox="0 0 100 100">
                <polygon points="50,10 90,85 10,85" fill="none" stroke="#f59e0b" stroke-width="4"/>
                <text x="50" y="72" text-anchor="middle" font-size="36" fill="#f59e0b" font-weight="bold">!</text>
            </svg>
            <h2 style="margin:12px 0 6px;">No Results Found</h2>
            <p style="color:#94a3b8;">"${keyword}"</p>`;
        grid.appendChild(noRes);
        updatePaginationButtons(1, 1, true);
        return;
    }

    const start = (currentPage - 1) * getItemsPerPage();
    filteredProducts.slice(start, start + getItemsPerPage()).forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.brand = p.brand;
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <div class="product-image" onclick="location.href='product-detail.html?id=${p.id}'" style="cursor:pointer;">
                ${p.image ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain;">` : ''}
                <div class="favorite-icon" data-id="${p.id}" onclick="event.stopPropagation();toggleFavorite(${p.id},this)">❤</div>
            </div>
            <div class="price-rating" onclick="location.href='product-detail.html?id=${p.id}'" style="cursor:pointer;">
                ${p.name}<br>
                RM ${p.price} <span style="color:#f59e0b;">★</span>${p.rating}
            </div>
            <div class="button-group">
                <button class="btn-add" onclick="event.stopPropagation();addItemToCart(${p.id})">🛒 Add to Cart</button>
                <button class="btn-buy" onclick="event.stopPropagation();location.href='product-detail.html?id=${p.id}'">Buy Now</button>
            </div>`;
        grid.appendChild(card);
    });

    updatePaginationButtons(currentPage, totalPages, false);
    applyFavoriteStates();
}

function updatePaginationButtons(page, total, hideAll) {
    const pgNav = document.getElementById('pgNav');
    if (!pgNav) return;
    if (hideAll || total <= 1) { pgNav.style.display = 'none'; return; }

    pgNav.style.display = 'flex';
    pgNav.innerHTML = '';

    // ← prev button
    const prev = document.createElement('button');
    prev.className = 'pg-btn';
    prev.innerHTML = '&#8592;';
    prev.disabled = page <= 1;
    prev.onclick = prevPage;
    pgNav.appendChild(prev);

    // numbered page buttons
    for (let i = 1; i <= total; i++) {
        const btn = document.createElement('button');
        btn.className = 'pg-num' + (i === page ? ' pg-cur' : '');
        btn.textContent = i;
        btn.onclick = (function(p) { return function() { renderPage(p); }; })(i);
        pgNav.appendChild(btn);
    }

    // → next button
    const next = document.createElement('button');
    next.className = 'pg-btn';
    next.innerHTML = '&#8594;';
    next.disabled = page >= total;
    next.onclick = nextPage;
    pgNav.appendChild(next);
}

function prevPage() { if (currentPage > 1) renderPage(currentPage - 1); }
function nextPage() {
    const total = Math.max(1, Math.ceil(filteredProducts.length / getItemsPerPage()));
    if (currentPage < total) renderPage(currentPage + 1);
}
function resetPage() {
    if (document.getElementById('sortName'))  document.getElementById('sortName').value  = '';
    if (document.getElementById('sortPrice')) document.getElementById('sortPrice').value = '';
    window.location.href = 'product-list.html';
}

// ============================================================
// HOME PAGE – products grid with pagination (30 per page)
// ============================================================
const HOME_ITEMS_PER_PAGE = 30;
let currentHomePage = 1;

function renderHomeGrid(page) {
    page = page || 1;
    currentHomePage = page;
    const grid = document.getElementById('homeGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const start = (page - 1) * HOME_ITEMS_PER_PAGE;
    products.slice(start, start + HOME_ITEMS_PER_PAGE).forEach(function(p) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML =
            '<div class="product-image" onclick="location.href=\'product-detail.html?id=' + p.id + '\'" style="cursor:pointer;">' +
                (p.image ? '<img src="' + p.image + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:contain;">' : '') +
                '<div class="favorite-icon" data-id="' + p.id + '" onclick="event.stopPropagation();toggleFavorite(' + p.id + ',this)">❤</div>' +
            '</div>' +
            '<div class="price-rating" onclick="location.href=\'product-detail.html?id=' + p.id + '\'" style="cursor:pointer;">' +
                p.name + '<br>RM ' + p.price + ' <span style="color:#f59e0b;">★</span>' + p.rating +
            '</div>' +
            '<div class="button-group">' +
                '<button class="btn-add" onclick="event.stopPropagation();addItemToCart(' + p.id + ')">🛒 Add to Cart</button>' +
                '<button class="btn-buy" onclick="event.stopPropagation();location.href=\'product-detail.html?id=' + p.id + '\'">Buy Now</button>' +
            '</div>';
        grid.appendChild(card);
    });
    applyFavoriteStates();
    updateHomePageNav(page);
}

function updateHomePageNav(page) {
    const nav = document.getElementById('homePageNav');
    if (!nav) return;
    const total = Math.ceil(products.length / HOME_ITEMS_PER_PAGE);
    if (total <= 1) { nav.style.display = 'none'; return; }
    nav.style.display = 'flex';
    nav.innerHTML = '';

    const prev = document.createElement('button');
    prev.className = 'pg-btn';
    prev.innerHTML = '&#8592;';
    prev.disabled = page <= 1;
    prev.onclick = function() { renderHomeGrid(currentHomePage - 1); };
    nav.appendChild(prev);

    for (let i = 1; i <= total; i++) {
        const btn = document.createElement('button');
        btn.className = 'pg-num' + (i === page ? ' pg-cur' : '');
        btn.textContent = i;
        btn.onclick = (function(p) { return function() { renderHomeGrid(p); }; })(i);
        nav.appendChild(btn);
    }

    const next = document.createElement('button');
    next.className = 'pg-btn';
    next.innerHTML = '&#8594;';
    next.disabled = page >= total;
    next.onclick = function() { renderHomeGrid(currentHomePage + 1); };
    nav.appendChild(next);
}

// ============================================================
// PROMO CAROUSEL (index.html)
// ============================================================
let scrollAmount = 0;
function slideRight() {
    const grid = document.getElementById('promoGrid');
    if (!grid) return;
    const totalItems = grid.children.length;
    const maxScroll = Math.max(0, (totalItems - 5) * 175);
    scrollAmount = Math.min(scrollAmount + 175, maxScroll);
    grid.style.transform = `translateX(-${scrollAmount}px)`;
}
function slideLeft() {
    const grid = document.getElementById('promoGrid');
    if (!grid) return;
    scrollAmount = Math.max(scrollAmount - 175, 0);
    grid.style.transform = `translateX(-${scrollAmount}px)`;
}

// ============================================================
// SHARED SPEC GENERATOR (used by both compare pages)
// ============================================================
function generateProductSpecs(product) {
    function spec(n) {
        return ((product.id * 9301 + n * 49297) % 233280) / 233280;
    }
    var codeNames  = ['Ampere','Navi','Ada Lovelace','RDNA 3','Raptor Lake','Zen 4','Hopper','Blackwell'];
    var relMonths  = ['January','March','May','July','September','November'];
    var relYears   = [2021, 2022, 2023, 2024];
    var coreOpts   = [1024, 2048, 3584, 4096, 5120, 6144, 8192];
    var processes  = ['5nm','7nm','8nm','12nm','16nm'];
    var coreClock  = Math.round(1200 + spec(7) * 1000);
    var boostClock = coreClock + Math.round(200 + spec(8) * 400);
    return {
        costEff:      Math.min(100, Math.round(35 + product.rating * 9 + spec(1) * 18)),
        powerEff:     Math.round(30 + spec(2) * 60),
        codeName:     codeNames[Math.floor(spec(3) * codeNames.length)] + '-' + (product.id * 7 + 100),
        release:      relMonths[Math.floor(spec(4) * relMonths.length)] + ' ' + relYears[Math.floor(spec(5) * relYears.length)],
        cores:        coreOpts[Math.floor(spec(6) * coreOpts.length)].toLocaleString(),
        coreClock:    coreClock.toLocaleString() + ' MHz',
        boostClock:   boostClock.toLocaleString() + ' MHz',
        transistors:  Math.round(10 + spec(9) * 70) + ' billion',
        process:      processes[Math.floor(spec(10) * processes.length)],
        tdp:          Math.round(65 + spec(11) * 250) + ' W'
    };
}

// ============================================================
// COMPARE PAGE
// ============================================================
function renderComparePage() {
    var params    = new URLSearchParams(window.location.search);
    var currentId = parseInt(params.get('id')) || 0;
    var keep      = params.get('keep') || 'left'; // 'left' = green (default), 'right' = orange
    var product   = products.find(function(p) { return p.id === currentId; });

    // Apply orange colour to left side if keeping the right/orange product
    if (keep === 'right') {
        var ths = document.querySelectorAll('.specs-table thead th');
        ths.forEach(function(th) {
            th.style.backgroundColor = '#FFA500';
            th.style.color = 'white';
        });
        var altRows = document.querySelectorAll('.specs-table tr.spec-alt');
        altRows.forEach(function(tr) {
            tr.style.backgroundColor = '#FFA500';
        });
    }

    // Populate left side if product found
    if (product) {
        var s = generateProductSpecs(product);
        function fill(id, val) { var el = document.getElementById(id); if (el) el.textContent = val; }
        fill('cProductTitle', product.name);
        fill('cRating',       product.rating + ' / 5.0');
        fill('cPrice',        'RM ' + product.price.toFixed(2));
        fill('cCostEff',      s.costEff);
        fill('cPowerEff',     s.powerEff);
        fill('cCodeName',     s.codeName);
        fill('cMarket',       product.category || 'General');
        fill('cRelease',      s.release);
        fill('cCores',        s.cores);
        fill('cCoreClock',    s.coreClock);
        fill('cBoostClock',   s.boostClock);
        fill('cTransistors',  s.transistors);
        fill('cProcess',      s.process);
        fill('cTDP',          s.tdp);
        var viewLink = document.getElementById('cViewDetail');
        if (viewLink) viewLink.href = 'product-detail.html?id=' + product.id;
        var addCartBtn = document.getElementById('cAddCart');
        if (addCartBtn) addCartBtn.onclick = function() { addItemToCart(currentId); };

        var imgBox = document.getElementById('cProductImage');
        if (imgBox && product.image) {
            imgBox.innerHTML = '<img src="' + product.image + '" alt="' + product.name + '" style="width:100%;height:100%;object-fit:contain;">';
            imgBox.style.background = '#fff';
        }
    }

    // Render right side product grid (all products)
    var grid = document.getElementById('compareGrid');
    if (!grid) return;
    grid.innerHTML = '';

    products.forEach(function(p) {
        // Build compare URL: if keep=right, currentId is id2; otherwise id1
        var compareUrl = keep === 'right'
            ? 'compare-products.html?id1=' + p.id + '&id2=' + currentId
            : 'compare-products.html?id1=' + currentId + '&id2=' + p.id;

        var card = document.createElement('div');
        card.className = 'compare-product-card';
        card.innerHTML =
            '<div class="compare-product-image" style="cursor:pointer;background:#fff;" onclick="location.href=\'compare-product.html?id=' + p.id + '\'">' +
                (p.image ? '<img src="' + p.image + '" alt="' + p.name + '" style="width:100%;height:100%;object-fit:contain;">' : '') +
            '</div>' +
            '<div class="compare-product-info">' +
                '<div class="compare-price-rating" style="font-size:11px;text-align:center;">' + p.name + '<br>RM ' + p.price + ' <span style="color:#f59e0b;">★</span>' + p.rating + '</div>' +
                '<button class="compare-btn" onclick="location.href=\'' + compareUrl + '\'">Compare</button>' +
            '</div>';
        grid.appendChild(card);
    });
}

// ============================================================
// COMPARE PRODUCTS PAGE (compare-products.html)
// ============================================================
function renderCompareProducts() {
    var params = new URLSearchParams(window.location.search);
    var id1 = parseInt(params.get('id1')) || 0;
    var id2 = parseInt(params.get('id2')) || 0;
    var p1  = products.find(function(p) { return p.id === id1; });
    var p2  = products.find(function(p) { return p.id === id2; });

    function fillSide(prefix, prod) {
        if (!prod) return;
        var s = generateProductSpecs(prod);
        var set = function(id, val) { var el = document.getElementById(id); if (el) el.textContent = val; };
        set(prefix + 'Title',       prod.name);
        set(prefix + 'Rating',      prod.rating + ' / 5.0');
        set(prefix + 'Price',       'RM ' + prod.price.toFixed(2));
        set(prefix + 'CostEff',     s.costEff);
        set(prefix + 'PowerEff',    s.powerEff);
        set(prefix + 'CodeName',    s.codeName);
        set(prefix + 'Market',      prod.category || 'General');
        set(prefix + 'Release',     s.release);
        set(prefix + 'Cores',       s.cores);
        set(prefix + 'CoreClock',   s.coreClock);
        set(prefix + 'BoostClock',  s.boostClock);
        set(prefix + 'Transistors', s.transistors);
        set(prefix + 'Process',     s.process);
        set(prefix + 'TDP',         s.tdp);
        var link = document.getElementById(prefix + 'ViewDetail');
        if (link) link.href = 'product-detail.html?id=' + prod.id;

        var imgBox = document.getElementById(prefix + 'Image');
        if (imgBox && prod.image) {
            imgBox.innerHTML = '<img src="' + prod.image + '" alt="' + prod.name + '" style="width:100%;height:100%;object-fit:contain;">';
        }
    }

    fillSide('p1', p1);
    fillSide('p2', p2);

    // Add to cart buttons
    var p1AddCart = document.getElementById('p1AddCart');
    if (p1AddCart && p1) p1AddCart.onclick = function() { addItemToCart(id1); };
    var p2AddCart = document.getElementById('p2AddCart');
    if (p2AddCart && p2) p2AddCart.onclick = function() { addItemToCart(id2); };

    // Switch buttons: clicking left Switch keeps id2, clicking right Switch keeps id1
    var p1Switch = document.getElementById('p1Switch');
    if (p1Switch) p1Switch.onclick = function() {
        location.href = 'compare-product.html?id=' + id2 + '&keep=right';
    };
    var p2Switch = document.getElementById('p2Switch');
    if (p2Switch) p2Switch.onclick = function() {
        location.href = 'compare-product.html?id=' + id1 + '&keep=left';
    };
}

// ============================================================
// SIDE MENU
// ============================================================
function openMenu() {
    const m = document.getElementById('sideMenu');
    const o = document.getElementById('overlay');
    if (m) m.classList.add('active');
    if (o) o.classList.add('active');
}
function closeMenu() {
    const m = document.getElementById('sideMenu');
    const o = document.getElementById('overlay');
    if (m) m.classList.remove('active');
    if (o) o.classList.remove('active');
}
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
});
function toggleDropdown(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('open');
}

// ============================================================
// INFO POPUP (index.html)
// ============================================================
function showPopup() {
    const popup = document.getElementById('popupBox');
    if (!popup) return;
    popup.classList.add('show');
    setTimeout(() => popup.classList.remove('show'), 5000);
}
function closePopup() {
    const popup = document.getElementById('popupBox');
    if (popup) popup.classList.remove('show');
}

// ============================================================
// LOGIN POPUP
// ============================================================
function openLogin() {
    const overlay = document.getElementById('loginOverlay');
    const popup   = document.getElementById('loginPopup');
    if (!overlay || !popup) return;
    overlay.style.display = 'block';
    popup.style.display   = 'block';
    setTimeout(() => popup.classList.add('show'), 10);
}
function closeLogin() {
    const popup   = document.getElementById('loginPopup');
    const overlay = document.getElementById('loginOverlay');
    if (!popup || !overlay) return;
    popup.classList.remove('show');
    setTimeout(() => {
        popup.style.display   = 'none';
        overlay.style.display = 'none';
    }, 300);
}

// ============================================================
// SIGNUP POPUP
// ============================================================
function openSignup() {
    const overlay = document.getElementById('signupOverlay');
    const popup   = document.getElementById('signupPopup');
    if (!overlay || !popup) return;
    overlay.style.display = 'block';
    popup.style.display   = 'block';
    setTimeout(() => popup.classList.add('show'), 10);
}
function closeSignup() {
    const popup   = document.getElementById('signupPopup');
    const overlay = document.getElementById('signupOverlay');
    if (!popup || !overlay) return;
    popup.classList.remove('show');
    setTimeout(() => {
        popup.style.display   = 'none';
        overlay.style.display = 'none';
    }, 300);
}
function goLogin() {
    closeSignup();
    setTimeout(() => openLogin(), 350);
}
function goSignup() {
    closeLogin();
    setTimeout(() => openSignup(), 350);
}

// ============================================================
// SOCIAL LOGIN (simulated)
// ============================================================
function doGoogleLogin() {
    setUser({
        email: 'googleuser88@gmail.com',
        username: 'Google User',
        phone: '+60 12-384 7291',
        memberSince: '12 March 2023',
        provider: 'google'
    });
    closeLogin();
    updateAuthUI();
    showToast('Login successful!', 'success');
    playNotificationSound();
    const pending = localStorage.getItem('pendingAction');
    if (pending === 'checkout') {
        localStorage.removeItem('pendingAction');
        setTimeout(() => { window.location.href = 'checkout.html'; }, 600);
    }
}
function doAppleLogin() {
    setUser({
        email: 'appleuser47@icloud.com',
        username: 'Apple User',
        phone: '+60 16-572 0364',
        memberSince: '5 July 2022',
        provider: 'apple'
    });
    closeLogin();
    updateAuthUI();
    showToast('Login successful!', 'success');
    playNotificationSound();
    const pending = localStorage.getItem('pendingAction');
    if (pending === 'checkout') {
        localStorage.removeItem('pendingAction');
        setTimeout(() => { window.location.href = 'checkout.html'; }, 600);
    }
}

// ============================================================
// PASSWORD RULES – auto-check on input
// ============================================================
function checkPasswordRules(val) {
    var rules = [
        { id: 'rule-length',  test: function(v) { return v.length >= 8 && v.length <= 16; } },
        { id: 'rule-special', test: function(v) { return /[!@#$%^&*()\-_,.?":{}|<>]/.test(v); } },
        { id: 'rule-upper',   test: function(v) { return /[A-Z]/.test(v); } },
        { id: 'rule-lower',   test: function(v) { return /[a-z]/.test(v); } },
        { id: 'rule-number',  test: function(v) { return /[0-9]/.test(v); } }
    ];
    rules.forEach(function(r) {
        var el = document.getElementById(r.id);
        if (!el) return;
        var satisfied = r.test(val);
        el.checked = satisfied;
        var label = el.closest('label') || el.parentElement;
        if (label) label.style.color = satisfied ? '#16a34a' : '';
    });
}

// ============================================================
// PASSWORD TOGGLE
// ============================================================
function togglePassword(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.type = el.type === 'password' ? 'text' : 'password';
}

// ============================================================
// PRODUCT DETAIL – quantity & add-to-cart
// ============================================================
let detailQty = 1;

function increase() {
    detailQty++;
    const el = document.getElementById('qty');
    if (el) el.innerText = detailQty;
}
function decrease() {
    if (detailQty > 1) detailQty--;
    const el = document.getElementById('qty');
    if (el) el.innerText = detailQty;
}
function getSelectedVariation() {
    const active = document.querySelector('.variation-btn.active');
    return active ? active.textContent.trim() : '';
}

// ============================================================
// FAVORITES
// ============================================================
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}
function saveFavorites(list) {
    localStorage.setItem('favorites', JSON.stringify(list));
}
function toggleFavorite(id, el) {
    let favs = getFavorites();
    const idx = favs.indexOf(id);
    if (idx === -1) {
        favs.push(id);
        el.classList.add('active');
        showToast('Favourite Added', 'success');
    } else {
        favs.splice(idx, 1);
        el.classList.remove('active');
    }
    saveFavorites(favs);
    renderFavoritesPanel();
}
function applyFavoriteStates() {
    const favs = getFavorites();
    document.querySelectorAll('.favorite-icon[data-id]').forEach(function(el) {
        const id = parseInt(el.dataset.id);
        if (favs.indexOf(id) !== -1) el.classList.add('active');
        else el.classList.remove('active');
    });
}
function renderFavoritesPanel() {
    const panel = document.getElementById('favoritesPanel');
    if (!panel) return;
    const favs = getFavorites();
    if (favs.length === 0) {
        panel.innerHTML = '<div style="padding:8px 16px;color:#888;font-size:13px;">No favorites yet</div>';
        return;
    }
    panel.innerHTML = favs.map(function(id) {
        const p = products.find(function(x){ return x.id === id; });
        if (!p) return '';
        return '<div class="fav-item" onclick="location.href=\'product-detail.html?id=' + p.id + '\'" style="display:flex;align-items:center;justify-content:space-between;padding:6px 16px;cursor:pointer;font-size:13px;">' +
            '<span>' + p.name + '<br><small>RM ' + p.price + '</small></span>' +
            '<span class="fav-remove" onclick="event.stopPropagation();removeFavorite(' + p.id + ')" style="cursor:pointer;color:#f44336;font-size:16px;margin-left:8px;">✕</span>' +
        '</div>';
    }).join('');
}
function removeFavorite(id) {
    let favs = getFavorites();
    favs = favs.filter(function(x){ return x !== id; });
    saveFavorites(favs);
    applyFavoriteStates();
    renderFavoritesPanel();
}

// ============================================================
// PAGE INIT – runs on every page
// ============================================================
window.addEventListener('DOMContentLoaded', function () {
    updateCartBadge();
    updateAuthUI();

    const page = window.location.pathname.split('/').pop() || 'index.html';

    // index.html – render dynamic home products grid
    if (page === 'index.html' || page === '') {
        renderHomeGrid();
        applyFavoriteStates();
        renderFavoritesPanel();
    }

    // cart.html – render items from localStorage
    if (page === 'cart.html') {
        renderCartPage();
    }

    // checkout.html – auth gate + render summary
    if (page === 'checkout.html') {
        if (!getUser()) {
            localStorage.setItem('pendingAction', 'checkout');
            setTimeout(() => openLogin(), 300);
        }
        renderCheckoutSummary();
    }

    // compare-product.html – render compare page
    if (page === 'compare-product.html') {
        renderComparePage();
    }

    // compare-products.html – render side-by-side comparison
    if (page === 'compare-products.html') {
        renderCompareProducts();
    }

    // product-list.html – render products + restore keyword
    if (page === 'product-list.html') {
        renderProductList();
        const params  = new URLSearchParams(window.location.search);
        const keyword = params.get('search');
        const si      = document.getElementById('searchInput');
        if (si && keyword) si.value = keyword;
        renderFavoritesPanel();
    }

    // Variation buttons (product-detail.html)
    document.querySelectorAll('.variation-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.variation-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Favourite icons – handled via delegation in initFavorites()

    // Real-time password rule checkboxes (signup popup)
    const signupPassInput = document.getElementById('signupPasswordInput');
    if (signupPassInput) {
        signupPassInput.addEventListener('input', function () {
            const v = this.value;
            const tick = (id, ok) => {
                const el = document.getElementById(id);
                if (el) el.checked = ok;
            };
            tick('rule-length',  v.length >= 8 && v.length <= 16);
            tick('rule-upper',   /[A-Z]/.test(v));
            tick('rule-lower',   /[a-z]/.test(v));
            tick('rule-number',  /[0-9]/.test(v));
            tick('rule-special', /[^a-zA-Z0-9]/.test(v));
        });
    }

    // Sort dropdowns on product-list page
    const sortNameEl  = document.getElementById('sortName');
    const sortPriceEl = document.getElementById('sortPrice');
    if (sortNameEl)  sortNameEl.addEventListener('change',  renderProductList);
    if (sortPriceEl) sortPriceEl.addEventListener('change', renderProductList);
});
