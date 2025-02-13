// Menu mobile
$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');

    });

    // Java  para  adicionar  sombra  no  menu de  navegação superior
    const sections = $('section');
    const navItems = $('.nav-item'); // Corrigido para selecionar corretamente os itens do nav

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
    } else {
        header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
    }

    // Verificar erro nesta parte que não está trocando o active no menu do nav
    sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset().top - 96;
        const sectionBottom = sectionTop + section.outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = i;
            return false; // Interrompe o loop ao encontrar a seção ativa
        }
    });

    navItems.removeClass('active'); // Remove a classe active de todos os itens
    $(navItems[activeSectionIndex]).addClass('active'); // Adiciona a classe active ao item correspondente
    // FIM - Verificar erro nesta parte que não está trocando o active no menu do nav
    });


        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
        // FIM - Verificar  erro nesta  parte  que  não  esta  trocando o active  no menu  do nav
    });

    // Aqui  animação  da página
    ScrollReveal().reveal('#cta',{
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish',{
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.testimonials_chef',{
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback',{
        origin: 'right', 
        duration: 2000,
        distance: '20%'
    });

;