using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularMaterial.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Persona() {
            return View();
        }
        public void Grabar(Persona persona) {
            var l = persona;
        }
    }
    public class Persona {
        public int ID { get; set; }
    }
}