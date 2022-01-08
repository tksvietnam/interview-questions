---
title: "Phân biệt IQueryable và IEnumerable"
isPublished: true
publishedDate: 2021-12-20T09:15:00+0700
lastUpdatedDate: 2021-12-20T09:15:00+0700
---

- Về namespace: IQueryable thuộc namespace System.Linq, còn IEnumerable thuộc namespace System.Collections

- Về nơi thực thi: IQueryable thực thi ở ngoài memory, ví dụ như truy vấn DB. Còn IEnumerable thực thi ở trên memory.
  IQueryable thích hợp khi dùng với LINQ to SQL, còn IEnumerable thích hợp khi dùng với LINQ to Entities và LINQ to XML

- Điểm chú ý về performance:

  Do IEnumerable thực hiện query trên memory, nên nếu viết câu query theo dạng IEnumerable thì kết quả sẽ là data từ DB được load vào memory, sau đó mới thực hiện câu query.

```csharp
IEnumerable<Person> persons = db.Person.Where(p => p.Name.StartWiths("T")); // sẽ truy vấn DB ngay lập tức, lấy tất cả Person có Name bắt đầu bằng "T", sau đó lưu vào biến persons trong memory => lưu nhiều records trong memory
persons = persons.Take(1); // lấy Person đầu tiên trong memory
```

Còn nếu viết câu query theo dạng IQueryable thì câu query sẽ thực hiện ở DB rồi kết quả mới được lưu vào memory.

```csharp
IQueryable<Person> persons = db.Person.Where(p => p.Name.StartWiths("T")); // khi kiểu là IQueryable thì sẽ không truy vấn DB ngay lập tức (delay)
persons = persons.Take(1); // khi thấy có lệnh Take (hoặc Select) thì mới thực hiện câu query, kết quả là query DB và trả về 1 record => chỉ lưu 1 record trong memory
```
