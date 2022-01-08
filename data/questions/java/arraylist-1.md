---
title: Cơ chế hoạt động của ArrayList
isPublished: true
publishedDate: 2022-01-02T09:15:00+0700
lastUpdatedDate: 2022-01-02T09:15:00+0700
layout: common
---

## ArrayList hoạt động như một array

ArrayList implements interface List và có cơ chế hoạt động như một array trong Java

Những điểm khác biệt mà ArrayList có so với array thông thường là

- ArrayList implements interface List nên có các methods để thao tác với array như add, addAll, remove, size, contains, sort, indexOf, ...
- Array phải chỉ định kích thước trước, chỉ chứa số items mà giới hạn bởi kích thước đã chỉ định. ArrayList không cần chỉ định kích thước, có thể chứa bao nhiêu items cũng được.

## Cơ chế tự tăng kích thước của ArrayList

Mặc dù ArrayList có thể chứa vô hạn items, nhưng để tiết kiệm bộ nhớ, khi khởi tạo ArrayList sẽ chưa khởi tạo ngay vùng nhớ để chứa dữ liệu.
Khi thêm phần tử bằng ArrayList.add(newItem) thì bấy giờ mới tạo 1 vùng nhớ chứa dữ liệu và lưu dữ liệu vào vùng nhớ đó.

Giả sử ở 1 thời điểm, ArrayList có N phần tử => vùng nhớ sẽ được cấp phát để lưu được N phần tử.
Nếu lại tiếp tục add 1 phần tử vào ArrayList thì cần cấp phát thêm vùng nhớ, lúc này cách hoạt động như sau.

- ArrayList mở rộng vùng nhớ hiện tại để ít nhất có thể chứa N+1 phần tử
- ArrayList copy N phần tử từ vùng nhớ cũ sang vùng nhớ mới
- ArrayList add thêm phần tử mới vào cuối
