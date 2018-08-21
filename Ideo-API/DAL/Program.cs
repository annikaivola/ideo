using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;

namespace DAL
{
    class Program
    {
        static IdeoDbContext dbc;
        static void Main(string[] args)
        {
            IConfigurationRoot Configuration;
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
            Configuration = builder.Build();
            string connectionStr = Configuration.GetConnectionString("IdeoDb");
            var options = new DbContextOptionsBuilder<IdeoDbContext>()
                .UseSqlServer(connectionStr)
                .Options;
            dbc = new IdeoDbContext(options);

        }
    }
}
