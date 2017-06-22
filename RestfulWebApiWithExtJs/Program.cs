using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace RestfulWebApiWithExtJs
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Для подержки кириллицы в консоли
            Console.OutputEncoding = System.Text.Encoding.UTF8;

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
