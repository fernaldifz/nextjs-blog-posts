# NextJs-Blog-Posts
Dibuat dengan menggunakan NextJs dan Tailwind CSS. Aplikasi ini menggunakan fake data dari public API [GO REST](https://gorest.co.in/).

Link deployment: https://nextjs-blog-posts-kappa.vercel.app/


Aplikasi dapat dijalankan dengan menjalankan perintah
```bash 
npm run dev
```

## Penjelasan Singkat
Secara sederhana, aplikasi ini terdiri dari bagian:
- Posts
- Users

### Posts
Bagian Posts terdiri dari 2 bagian, yaitu:
- Post List: 
  - Menampilkan list post yang didapatkan dari [GO REST](https://gorest.co.in/).
  - Dapat diakses dengan menggunakan Navbar bagian "Posts"
  - Memiliki path `/`
  - Support pagination
- Post Detail: 
  - Menampilkan detil post beserta komen dan user yang didapatkan dari [GO REST](https://gorest.co.in/).
  - Dapat diakses dengan menekan post di post list, yang ingin dilihat detilnya.
  - Memiliki path `/post/[id]`

### Users
Pada bagian ini, dapat dilakukan CRUD users. Bagian Users terdiri dari 4 bagian, yaitu:
- Users Page (Read users): 
  - Menampilkan data users yang didapatkan dari [GO REST](https://gorest.co.in/).
  - Dapat diakses dengan menggunakan Navbar bagian "Users"
  - Memiliki path `/users`
  - Support pagination
  - Dapat melakukan search user berdasarkan name, email, gender, dan status user
- Create user
  - Membuat user baru beserta data user tersebut di [GO REST](https://gorest.co.in/)
  - Dapat diakses dengan menggunakan Navbar bagian "Create User"
  - Memiliki path `/create_user`
  - Membutuhkan [access token](https://gorest.co.in/my-account/access-tokens)
- Edit user
  - Melakukan update user di [GO REST](https://gorest.co.in/)
  - Dapat dilakukan dengan menekan icon edit di user yang ingin diupdate di Users Page
  - Memiliki path `/edit_user/[id]`
  - Membutuhkan [access token](https://gorest.co.in/my-account/access-tokens)
- Delete user
  - Melakukan delete user di [GO REST](https://gorest.co.in/)
  - Dapat dilakukan dengan menekan icon delete di user yang ingin didelete di Users Page
  - Memiliki path `/delete_user/[id]`
  - Membutuhkan [access token](https://gorest.co.in/my-account/access-tokens)
