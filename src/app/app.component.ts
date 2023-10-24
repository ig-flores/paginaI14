import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'PgMusica';

  seccionActual = 'inicio';
  mensajeInicio = 'Bienvenido a nuestra página de música. Descubre las últimas canciones y artistas destacados en el ambito electronica.';
  informacionAutor = 'Somos un equipo apasionado  de la música. Esta página es  para compartir nuestra pasión con el mundo con lo que viene siendo la musica electronica.';
  productos = [
    {
      nombre: 'Suscripción Premium de Música',
      descripcion: 'Obtén acceso ilimitado a nuestra colección completa de canciones y disfruta de la música sin anuncios.',
      imagen: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVEhgVFRISGBUYEhIVGBgYGBIRGhgVGBgZGRgVHRocIS4lHB4rHxgYJjomKy80NTU1GiQ7QDs0Py40NTEBDAwMEA8QHhIRHj8rHiw0NDQ/Pz8/NDY0NDQxNDQxND8/ND00NDQ0MTQ3NDE0NDQ0NDExNDs0MTExNEAxPzQ0Mf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgAHAwUGBAj/xABKEAACAQIDBQMGCAsGBwEAAAABAgADEQQSIQUGMUFREyJhB1JxgZGhFDI0QnSSsbIWJFRicnOTwcPR0iNTosLh8BczY4KDs/EV/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EACARAQEAAgIBBQEAAAAAAAAAAAABAhESEwMhMUFRkWH/2gAMAwEAAhEDEQA/ALFgtIIwMALCZJDAxGAR2EW0BlEaAQ5YEikRssUwEtJeMwmMwGkmO8l4GSS8x3kzQMmaAxVhMBryQCGBJJILwGBhvFEkBryGKIbwHvGUzGIwgZLyRLwwEvCrRLQQMl5LxbyQCYJLyQGEaKsa8CQEQ3i3gBpijkzyY/FdnTd7XKU2YDrbr4QMpkEr/HeUB+zypRVXNu+WLAa693npeak7+Yvl2PDjksSep70C1byTg9ieUAMwTE0wpJC50va585ddPH3TvIBBjiIIYDiGIBGECEwRrwQJJeSCAxgvBCIBBmWYo2aA8kSSBILQw3gIYt414vrgQRosYQGUwhpjIhgZLxCZLxGMAmcvvthqz0S1J7IoLOL5SQOJ09k6W88u1cMalCogYIXpsuY3IF+Z8IFFPqeMx31ha1zY3HI8iOR9cWBOctLydbUarRem75mRgQSbtkYaD0CVgi9ehli+S7C2p1qluLql/QMx+8IHdiGSSA0kkkCQwSQCYICYLwGMAbwgzQFoGQGEGY80OaBkvJMeeGA4jAxSIVgEzGTHkIgY7SZY0BgQRgYoEJEAmLaGQwEInm2lgu3ovRLsgdcpZeI1Hu6z1SQPn7EUijsh0KsyG+mqkjnMU7/fDdtFrVMTUxNKkjkFUCs1R3AAawvqSRfS/qnB1GBPdvblfjbx6HwgKeEsXye7fpBUwmR1qMzsHJXKzWJy2vcGynrK5m13cxRp4mm5y27RbkhTYczflAvAwSI1wCOYvfqDwMhgNeS8UQ3gMDBBeS8CEwSGC8ASXhMUmAbyXiwiA3rgkvJAz3ghtBAN4ZAZIAInK7/bUq4ahTejUKM1fIxABuuR2tr4qJ1c4nyp/JaP0r+FUgch+GON/KD9Wn/TId8sb+Ut9Wn/ACmgkgb/APDHG/lLfVp/0y1ti1mfC0nc3d6dNmPUlbkyipeW7x/E6H6in90QPeRPBtvaPwfDvWyZ8i3C8LkkDXwFxee8zHXoq6MjrdGUqw6qeMChtqbSqYmoatV8znTTRVHJVHIWvPIJ79t7LbDV3oMScp7p85D8Rz4kWv4ieK0ATb7PdSRdFPUWmons2bUKuLLmzAi17X5wLP3e2itJFpliUv3cxuUvwW/NenonUAyqNnbUQ5Fe65XyMTYqVOoNxwIIPHzjNxX3mr0sCoVGDOzqlU8BTzN3l87kB00gdtT2hTaq9FaiGoigsnMA+71akc56pRWGxT06gqI7B1bMGvc5jxN/dLY3X3jTF07Gy1lAzp1/PXw46coG8gvGimBJ58bi0pIzuwVFGp+wW4knlJisWlKmzuwVFFyT7hbmTrYSqd5NvviqnNaSnuJ/nbqx90C1MFjkrU1qU3DIwuD9qkcQQZnvKh3e28+FqXHepse+l7XHnDow68+EtXA4xK1NaiMGVuB5380jkw5wsZy8a8QwXklWw8kW8kqae4wWj2ktCEtJePaIwgEGcR5VT+K0PpY/9VSdrecT5VfktH6V/CqQKyBhgEhMAy8d3vkdD9RT+6JRhl57vfI6H6in90QNjJaSabe3Gmjgqzjj2eQHoX7gPqzQKh2/tEYnF1K1yVZ7J4ItwgHhYX9c8bvfQTEq62mUWUdYGNhHo1SrKw4qbxGN5EaxBsDYg6i4011HOB3G6uxg9HM4ujNTZh51yFQHwOhnXbw4QPhqVN+dRUJsO4rgroOVjlI/Rms3e2xSqU0RbdqcTRd0AygAnMMnVRa1uVpvseDUou4F/iMnqYa+qBTWLwzU6j03+Ojsjekf6aw4TEvTqK6MVdSCCOv8vCdH5RMIExrMOFRQ/hmHdNvYvtnLrAt3djeNMVTsbLWUd9Oo89fDr0m2xmLSlTao7BUUXJ+zTnflKSw2Iem6ujFXU3VhyM2W3dv1cUVz5VRAAEW4XMNC5ueJv6oDby7wPiqnNaSklE/zv1Y+6aW8NpLQFm33e28+FqXF2puQHQ8GHnDo4F9ec1Vo+Ewj1KgRFLOxsAPt8Bw1MLF0YPGpWprURwyMLg9LcQejDpMoM0+7exBhaWUsWd+85+bmtoFHQcL87TcESeyjf0yRbyRsbILOR8pOOqUMNTalUqITXykoxUlezfT2zsAJw/lY+SUvpA+48rLgfwlxn5ZiPrtHG8mL/LMR9dppZkUwNx+EWL/K8R9dp5cdtWvWULVrVHVWzAOxcA9fTPIJ69lUleuiMLqWsRrrpf8AdJllxmzTxkRZ1lTYKdqHBUUB8ZcxuHXTJfoSRPBjNlocalFFyoQhK3PxbXb3Ccp5sbW+FaEzaUdv4lFCLiq4VQFVVc6AaWHhPVvNs+miJUoqFQmojWJPfW/Xn3WHqm1rbLoK6J8FqMHUXdWchdDx14847sdS6W+O7s20n4SYv8rxH7Rp1G4rPjalVMTUevRSmhyVD2iF2fuNlOhICPb0znaWwWOIIVQ9JKwRiWAuoKlhx1NjbSWBunhqeH7dUspdlKKMx0SmNdfzs3tlnlx3qJMLr1e/Fbt4MK+XB4YEI2oRb8DrKmwOMpZEWpTp/HfOcgzZMl071jrmJHqlqVcbUNEHtDmZqiE2W5W3D3ytn2KqUcVnTMyBTTfUdwjQ2HonPtxy+a3wyjG2Iwxo2VUD5EtmAZr5LMM2TvHNfUWJmhvNru9s1K1Ri5IREztbidbAeAsD7J6MXTpPQL08FUQWujgnLlvYswv0uPXN8pjde7OrlNjgGaliKSoSGyIzkchlzH06Ae+d7sTeBMTg2RBlrIl2S99L3Dr1H2cOU5bYuCR6ZquBncOqG5uEyZNB7YmxKASq5AOenTUqVupBNww8b9DL2zV/iTDL9bDym1M1Sn3bf82zG3eW1O/jyE4i07PeLDioadR2LMDTS2oGRnN09N7n1CeSps2iahp/B2VQtxUDNa/HmZnvn0twrl402VXCU1wyuRc9sULAkEqHYegaAT0//mU2K1Ee1ErmK630428Jrtx+UmFrSwgxsQUzEoCEJOW/G0mGw71HVEUs7GwUf70HibCdYxRw2Geo6oilnY2UDr+63HwtLS3a3fTC07mzVnADv0HNFPJb8+cG7WwEwqX0as3x342vrkXovjxM3kLCmSMYpElVJJJJNDZgzh/Kx8kpfSB9x5205ff7Y1XFUESiqsy1s5uwTu5HXnz1mmVOR1nS/gDjv7tP2i/yjDcPHf3dP9on8oHOT07NxASqjtfKrXNhc8DN2Nxcb/d0/wBov8p4dr7vV8MivWRVVnyCzhiWsWtYcrA+ySzay6u3nxG0iaj2ZuzestQr1sRy9U2a7cpCu9bK5JpoiAj52ua+ug+L75zcBmL4sa1M631fbSVMM9J6YQk3TICRmve5v434dZ633jHboymp2YplXX4tzrYgcyNJy4nQ4Xc3F1KautNCrqHUl1F1PDTkZnpxOyvDR2hkrZkqVBS7YOV1UlcwLXF9TYGXBsBFfCpUCWLozKSBmAYnKT00lYtuPjACTTpgAEk51IA5k6cuPqnVUt9MGoVUq1Mq00VCFqKqhUt3lt3tbGMsMZd6+CZZX023tfZLigFuuZGqO2txbKDpKuTeANg2oPmL5Mim1wVHAk8uE7H8OMNyq1CNRlYO5JKMua5HC5Bt4Ti8PVwyvmLUyOxpoAUJAdAgLG6njZuXOYxwmvZvlft4ti7T7CoTbMjLkZRa5F73F+c2L7TwyUnp0RW/tFy2YghAdLgX8ZgOKpDIVFLKGTOhpKzE3Od85GoI4aaaDlHp4yiRqKavmqWY0lZQucEDIBqSmgPLhLZLd6JdTW22wW10eolOmndWnoWuCMuulvAQYOsGrv2SOzVwoRQPnqDfXgBwJJ0nnwFam9QJh6RNZhUVAotcux7rWHIWOblwlgbrbA+DIQ5RnKkZuNiWJYA9D3fZGPil36M3LKOB2ztBQ4pvmz0qqZstyrZbBm168Z5zttTUe+c0nTKBY3DWtcD03mLe6jkxlQEgktm9pJmmBnTqxTnk2XwtOwSllc5amYj4t1zMbX9BEzttyzgKoFMC2Ww1HC/gfCae8Bk6onK7Za7qzsVXKpJIHh+6PhcU9N1dHKupurDl/MeE84EM6SaZW5u3vCmKp8AlVR308PPW/FT05c5uwJR+ExT0qiujFXU3BHv9I8OctbdneBMXT1stVR30v/jXqp90rW25MEcrFywBaSHLJA94hBgEaGSmG0MkDEZxHlUP4rR+lfwqk7vLOE8q4/FqH0v+FUgVjeCC8gMB1l4bvfI6H6in90SjxLx3e+R0P1FP7ogY9565TBYhhofg9QD9JlKj3kSkAmlvV6hLg3/rZcA489qae1xKhEBCIDIxkgCGQmMsC5Nytg0sPQV0ZalSois1ReGU6hU6KNR1NjedCjDX0yoN0N6Gwj5Hu2HZrsvEoTxdB9o52ltYesj0w6MGRhmDDgQekCq/KDQIxWc/PVh4XQgD3NOVInb+UgEVKQ+aVqEem4B+6JyGGwz1KioilndgqgdTz8PXAXC4Z6jqiIWdjZVHEmbPb+7tXCFc+VkYCzpcrn+cmvMe+WTuru0mEp5jZqzCzvyA45F8Op52m3xuEStTam6hkcWIPuI6HxgURJN5vLu8+EqWF2pOf7N7f4GtwYaemaWAsz4TFPSqLURirobhhy9PUeEwTot1d2mxL53zLRVtToC5HzF6jTU+MLFgbubY+FUBUKFWByt5pYc1PMTakxKNFUQIihUUWUDQAQ2hUkhkge6EQQiGTQWhkJgScH5WfktD6X/CqTvJzW/OwKuMo00pGmGSt2hzllGXI6cQp173ugUvJOy/4bYzz8N+0f8AokPk3xfn4b69T+iBx6y893fkdD6PT+6JXg8nGL8/DfXqf0Sytk4VqWHpU3ylkpojWuQSBrbqNIHGeVHGuFoUQAEc1HYkc0KhQPrn3SuGadNv3tU18Y6g9yiWpL+kDaofW4I/7ROZYQFhUQQgwIYYRCBAGWdRult98MxRrvh2+MvHIT89f3rznMgT0I5AsDoYHd7/AFL4QuFNEZy71ETKb3uqtp9vhN7utuymFp3bK1dwM7jgv5idANbnn6ppfJo7M1UE9xFUoALBWb4xHS9hO9KwEMBEe0BgeTG4VKtNqdRQyMLEH7fA+MqTefd98JU5tRY9x/8AI35322lyZZ58bg0q02p1FDIwsVPuI6EdRAqzdPdp8U2d7rQU6mxBduaKenC7S06OHRFVEUKigKqjgFHATJRoqiBEUKiiwUaADwjQEKSZY8kLC2Eka0kLt6IbzHmhzQye8aYs0a8B5IgMIgEeqFhAI14CGD/f74xiwKc342c9PG1WKMEdy6NyYEC9j4Hj/rOeNFrZrHLe2axtm6X5GX7jsDTrJkq01db3swv6x0PjOH8oWz6eHwNNKVMIPhSA24nuVLFjxbl7BArSSG0loBEyKpPI+qIsyKukDa7H2O+IIVB3y+XK10Ftdb25W986vZ+4T51NVqJTN31VqmYr4Na15qvJ7TLYxCOCK7H0Wt/KWxA8Gy9jUcMGFFMua19Wa9vTPfaEwQBzgtGiwAwi5Y8kBCsW0yQWgIwikTIRBaAmskeSBBGEe0loCQAx2EW0BlMYGII6wGENoBGgLaCZIpEBJyHlOoFsCGHzMRTY+gq6fawnYGc9vymbZ9bwVH+q6mBS8ka0mXSAVGnrtGU+yKBHUQOv8nJAxmp40qgA6nQ290tK8q/ydD8aN8v/ACzqeROgAPInX2Sz4DAyZosCwCZDwgJiluPgbQHMGaIzRbwMmaSJntxhzQCzQWgLyE9IBkmLPJA90kF5LwA0QxoCsBIywWhgOI0SFjAaQmY7yAwHvPHtXCdtQqUr/HpugJ4AngfaFnpJihtYHz86FSVNrgkEcbEaEXgWZcVRKOyMCCrMpB01DG/r4GYhAyKhylrHKCATyuQSB6bKfZIs6XdLZvwmliaOUXyU3RybWdGIRbdDmbXxnPNTKkqbXBINteBsT6LwNxutjVpYpHfNkzrcDx0BPovLiYSi8MQHUsLqCCRwuAb2l34aqrIrL8UqCLa6QMhEDGQmLAcSGITAW9kAmDPMLPaIGN4ajKXuYVeYQ8ZWEDIfXI/DjIDFZZKEt4yQyQPZmkzTGGkzSssohvEvFDSbGSAmKHkzShzATFLwKYD5oGMUtA7wM9ABjY+aSNQtyCNLmZTRSwsQdW1zAcM3L1TVVKo4XkLwOY3t3fpGqKzsCzoiFO0SneqKqKVH/jLsehF7zSYnYWEWjXdHVyi3pP26DOvZZ+0y/paZeWXXjPX5SaKlaT5dczpfqpF7ejScIFECztzNl0Uek6EF3wmZ/wC2W+fKrZcl9Nec8u9OxsJRquRTPewtauAKvZKaqVMgTh87Nr+jpNBuKcuMXTjTqD2gH902PlAU9rSP/Sb75/nAyjYeEGbLUBXXv9vT7jjs8lPs7XbPdjm5XPSd3gKdNKKCk5ZFzoCSCbI5XUjjwOvPjKdwa6jSWjsIgUEA/O+0wNreEtMJeLngZb3gJ1mMPJeAzajxmC9hM4a0x1WvDUBGv/8ALR+zv6ZhpmPmk0MtoGaANpEy+uUPmHWSY8p6SQP/2Q=='
    },
    {
      nombre: 'Catálogo de Canciones Electronicas',
      descripcion: 'Explora nuestras canciones clásicas cuidadosamente seleccionadas de artistas legendarios.',
      imagen: 'data:image/jpeg;base64,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'
    }
  ];
  informacionContacto = 'Ponte en contacto con nosotros en ivan@gmail.com o a través de nuestro número de teléfono: (656) 751-8001.';

  cambiarSeccion(seccion: string) {
    this.seccionActual = seccion;
  }
}
