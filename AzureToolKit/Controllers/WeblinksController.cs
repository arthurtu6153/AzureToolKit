using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AzureToolKit.Controllers
{
    [Route("api/[controller]")]
    public class WeblinksController: ControllerBase
    {
        List<Weblink> allWeblinks= (new Weblink[6] {
            new Weblink() {Id= 1, Description="Commissions", Url="https=//commissions.preferredhomecare.com/Commission/"},
            new Weblink() {Id=2, Description="Concen Tracker", Url="https=//concerntracker.preferredhomecare.com/Concern/Dashboard/"},
            new Weblink() {Id=3, Description="Global Patient Search", Url="https=//apps.preferredhomecare.com/apps/GPS/"},
            new Weblink() {Id=4, Description="Branch Order", Url="https=//my.phc.com/BranchOrder/"},
            new Weblink() {Id=5, Description="ADP Portal", Url="https=//workforcenow.adp.com/public/index.htm"},
            new Weblink() {Id=6, Description="CrossWalks", Url="https=//my.phc.com/CrossWalks/"}
        }).ToList();

        [Route("")]
        [HttpGet]
        public async Task<IActionResult> GetWeblinksAsync()
        {
            await Task.Delay(0);
            return Ok(allWeblinks.ToList());            
        }

        [Route("{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteWeblink(int id){
            var weblink = allWeblinks.FirstOrDefault(w=>w.Id == id);
            if (weblink == null)
                return NotFound();

            await Task.Delay(0);
            allWeblinks.Remove(weblink);
            return NoContent();

        }
        public class Weblink
        {
            public string Description { get; set; }
            public int Id { get; set; }
            public string Url { get; set; }

        }
    }
}
