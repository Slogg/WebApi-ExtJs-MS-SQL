using System;
using System.Collections.Generic;
using System.Linq;

namespace RestfulWebApiWithExtJs.Models
{
    public class ProductStore
    {
        List<Product> products;
        public ProductStore()
        {
            products = new List<Product>()
            {
                   new Product { Id = 1, Name = "Морковь", Count = 12, Unit = "кг", Stock = "1А" },
                   new Product { Id = 2, Name = "Огурец", Count = 14, Unit = "кг", Stock = "2Б" },
                   new Product { Id = 3, Name = "Помидор", Count = 16, Unit = "кг", Stock = "2Б" },
                   new Product { Id = 4, Name = "Банан", Count = 76, Unit = "кг", Stock = "4В" },
                   new Product { Id = 5, Name = "Дыня", Count = 23, Unit = "кг", Stock = "3А" },
                   new Product { Id = 6, Name = "Слива", Count = 345, Unit = "кг", Stock = "1Б" },
                   new Product { Id = 7, Name = "Морковь", Count = 12, Unit = "кг", Stock = "1В" },
                   new Product { Id = 8, Name = "Лук", Count = 14, Unit = "кг", Stock = "1Г" },
                   new Product { Id = 9, Name = "Чеснок", Count = 16, Unit = "кг", Stock = "1Д" },
                   new Product { Id = 10, Name = "Тыква", Count = 76, Unit = "кг", Stock = "2Д" },
                   new Product { Id = 11, Name = "Черешня", Count = 23, Unit = "кг", Stock = "3Б" },
                   new Product { Id = 12, Name = "Вишня", Count = 345, Unit = "кг", Stock = "2Б" },
                   new Product { Id = 13, Name = "Горох", Count = 12, Unit = "кг", Stock = "5А" },
                   new Product { Id = 14, Name = "Малина", Count = 14, Unit = "кг", Stock = "3В" },
                   new Product { Id = 15, Name = "Клубника", Count = 16, Unit = "кг", Stock = "1Д" },
                   new Product { Id = 16, Name = "Картофель", Count = 76, Unit = "кг", Stock = "1А" },
                   new Product { Id = 17, Name = "Яблоко", Count = 23, Unit = "кг", Stock = "2Д" },
                   new Product { Id = 18, Name = "Груша", Count = 345, Unit = "кг", Stock = "5А" },
                   new Product { Id = 19, Name = "Ананас", Count = 12, Unit = "кг", Stock = "6A" },
                   new Product { Id = 20, Name = "Абрикос", Count = 14, Unit = "кг", Stock = "1Б" },
                   new Product { Id = 21, Name = "Черника", Count = 16, Unit = "кг", Stock = "3Б" },
                   new Product { Id = 22, Name = "Перец", Count = 76, Unit = "кг", Stock = "2Г" },
                   new Product { Id = 23, Name = "Персик", Count = 23, Unit = "кг", Stock = "1Г" }
            };
        }

        //void FillStore()
        //{
        //    products.Add(

        //        );
        //}

        public Product GetProductById(int id)
        {
            Product result = products.FirstOrDefault(i => i.Id == id);
            return result;
        }

        public List<Product> GetProducts()
        {
            return products;
        }

        public void DeleteProduct(int id)
        {
            products.RemoveAll(i => i.Id == id);
        }

        public void SetProduct(int id)
        {

        }

        public void AddProduct(Product product)
        {
            products.Add(product);
        }

    }
}