using System;
using System.Collections.Generic;
using System.Linq;


namespace RestfulWebApiWithExtJs.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Count { get; set; }
        public string Unit { get; set; }
        public string Stock { get; set; }
    }
}