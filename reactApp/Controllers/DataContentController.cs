using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
namespace reactApp.Controllers
{
    [Route("api/[controller]")]
    public class DataContentController : Controller
    {
        [HttpGet("[action]")]
        public TableData Datatable()
        {
            return GetDataTable();
        }

        private TableData GetDataTable()
        {
            TableData result = new TableData();
            result.Head = new List<TableHeader>(){
                new TableHeader(){Name="NO",width="20px"},
                new TableHeader(){Name="氏名",width="100px"},
                new TableHeader(){Name="会社名",width="150px"},
                new TableHeader(){Name="住所",width="200px"},
            };
            result.Rows = Enumerable.Range(1, 5000).Select(index => new string[]{
                    $"{index}",
                    "AAAA",
                    "BBBB",
                    "CCCC"}
                ).ToList();
            return result;
        }

        public class TableData
        {
            public List<TableHeader> Head { get; set; }
            public List<string[]> Rows { get; set; }
        }


        public class TableHeader
        {
            public string Name { get; set; }
            public string width { get; set; }
        }
    }
}
