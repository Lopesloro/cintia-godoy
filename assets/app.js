/* Cíntia Godoy — comportamento.
   Regra: o script troca estado, nunca entrega conteúdo.
   Se ele não rodar, a página continua inteira e visível. */

(function () {
  'use strict';

  var raiz = document.documentElement;
  raiz.dataset.revealOk = '1';

  /* ---- header vira sólido depois de 80px ---- */
  var topo = document.querySelector('.topo');
  if (topo) {
    var solido = false;
    var marcar = function () {
      var passou = window.scrollY > 80;
      if (passou !== solido) {
        solido = passou;
        topo.classList.toggle('solido', passou);
      }
    };
    marcar();
    window.addEventListener('scroll', marcar, { passive: true });
  }

  /* ---- reveal de seção: fade + 16px, uma vez, stagger de 90ms ---- */
  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        /* bloco alto empilhado no celular: 18% dele pode ser meia tela de rolagem,
           então 160px visíveis também contam */
        if (e.intersectionRatio < 0.18 && e.intersectionRect.height < 160) return;
        var alvo = e.target;
        observador.unobserve(alvo);

        var filhos = Array.prototype.slice.call(alvo.children, 0, 3);
        if (filhos.length > 1) {
          filhos.forEach(function (f, i) {
            f.style.transitionDelay = (i * 90) + 'ms';
          });
        }
        alvo.classList.add('visivel');
      });
    }, { threshold: [0, 0.18] });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observador.observe(el);
    });
  }

  /* ---- a faixa do Laser Day some sozinha depois da data ---- */
  var aviso = document.querySelector('.aviso[data-ate]');
  if (aviso) {
    var limite = new Date(aviso.dataset.ate + 'T23:59:59-03:00');
    if (!isNaN(limite) && Date.now() > limite.getTime()) {
      aviso.remove();
    }
  }
})();
