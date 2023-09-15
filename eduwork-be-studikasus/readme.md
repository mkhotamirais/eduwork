nodemon start / npm start

Studi Kasus POS system backend
Overview: POS Point of sales sistem yang mendukung transaksi jual belli, kelola produk dan laporan transaksi digital. Ada diminta untuk membuat sistem yang menjembatani client dan customer.

Latar belakang toko makanan
customer bisa lihat MAKANAN dan detailnya bisa memilih dan memesan
customer bisa filter berdasarkan KATEGORI / TAGS
customer bisa mencari berdasarka nama
customer bisa memasukkan item ke KERANJANG BELANJA dan ubah JUMLAH PESANAN per makanan
customer bisa lihat total harga lalu checkout dengan menambah / memilih / mengelola ALAMAT PENGIRIMAN hingga dapat perkiraan yang dibayar, diproses, lakukan pembayaran, dikirim ke tujuan yang benar, lihat detail pesanan dst, bisa tambahkan lebih dari 1 alamat
customer bisa melihat INVOICE dan riwayat pesanan

Entity: PRODUCT, CATEGORY, TAG, CART, ORDER, INVOICE, DELIVERY ADDRESS

Database Design

- User
  fullname: string
  customer_id: integer
  email: string
  password: string
  role: enum[user, admin]
  token: string
- delivery address
  nama: string
  provinsi: string
  kabupaten: string
  kecamatan: string
  keluarahan: string
  detail: string
  user: User
- Order
  status: OrderStatus
  delivery_fee: integer
  delivery_address: DeliveryAddress
  user: User
  order_items: OrderItem
- CartItem
  name: string
  qty: integer
  price: integer
  image_url: string
  user: User
  product: Product
- enumation UserRole
  user
  admin
- OrderItem
  name: string
  price: integer
  qty: integer
  product: Product
  order: Order
- enumation OrderStatus
  waiting_payment
  processing
  in_delivery
  delivered
- Invoice
  sub_total: integer
  delivery_fee: integer
  delivery_address: DeliveryAddress
  total: integer
  payment_status: PaymentStatus
- Product
  name: string
  description: string
  price: integer
  image_url: string
  category: Category
  tags: Tags[]
- Tag
  name: string
- Category
  name: string
- enumaeration Payment Status
  waiting_payment
  paid

- GET, POST, PUT, DELETE
  Product
  category
  tag
  delivery address
  order
