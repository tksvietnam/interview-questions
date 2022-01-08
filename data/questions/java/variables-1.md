---
title: Biến trong Java được lưu ở heap hay stack?
seoTitle: Lorem ipsum
abstract: Lorem ipsum
cover_image: "/images/posts/img3.jpg"
isPublished: true
publishedDate: 2022-01-02T09:15:00+0700
lastUpdatedDate: 2022-01-02T09:15:00+0700
layout: common
---

## Biến trong Java gồm có 2 loại

### 1. Biến primitive

Gồm các kiểu (`int`, `long`, `double`, `boolean`, `char`) được lưu ở **stack**

### 2. Biến non-primitive hay còn gọi là biến reference

Về bản chất là con trỏ.  
Con trỏ gồm 2 thành phần:

- địa chỉ con trỏ là kiểu `int`, được lưu ở **stack**.
- nội dung của con trỏ (chuỗi ký tự, `object`, ..) được lưu ở **heap**
