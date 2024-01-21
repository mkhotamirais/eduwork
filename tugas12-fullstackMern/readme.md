KONFIGURASI AWAL

1. express --view=pug . [express generator](https://expressjs.com/en/starter/generator.html)
2. npm install && SET DEBUG=server:\* & npm start
3. open package.json -> scripts, below start, add: {"dev": "DEBUG=server:\* & nodemon app.js"}

Sistem POS (point of sales) mendukung transaksi jual, beli, kelola produk dan laporan transaksi digital

USER STORY

1. [] customer bisa lihat (nama, harga) filter (kategori, tags) cari bersadar (nama)
2. [] customer bisa daftar masuk dan pesan makanan, masukkan ke keranjang lihat total belanja dan ubah jumlah pesanan lalu checkout
3. [] customer bisa menambah, mengubah dan memilih alamat pengiriman, lihat invoice dan riwayat pesanan;

DATABASE

1. User ({fullname: string, email: string, password: string, role: enum[user, admin], customer_id: integer})
2. DeliveryAddress ({nama:string, provinsi:string, kabupate:string, kecamatan:string, keluranan:string, detail:string, user_id:User})
3. Order ({status:enum[waiting_payment, processing, in_delivery, delivered], delivery_fee:integer, delivery_address:DeliveryAddress, user:User, order_items:OrderItem})
4. CartItem ({name:string, qty:integer, price:integer, image_url:string, user:user, product:product})
5. OrderItem ({name:string, price:integer, qty:integer, product:Product, order:Order})
6. Invoice ({sub_total:integer, delivery_fee:integer, delivery_address:DeliveryAddress, total:integer, payment_status:enum[waiting_payment, paid]})
7. Product ({name:string, description:string, price:integer, image_url:string, category:Category, tags:Tag})
8. Category ({name:string})
9. Tag ({name:string})

ENTITY: Product (ALL), category (All), tag (All), cart (All), order (GET, POST), cart (GET, PUT), invoice, delivery address

KONFIGURASI (view engine : pug)

1. install express jika belum ada npm i express@latest -g
2. express --view=pug [nama_folder / jika di folder yang dipilih gunakan titik (.)] / expres --view=pug .
3. ikuti instruksi dengan instal dependensi dan jalankan denga debug
