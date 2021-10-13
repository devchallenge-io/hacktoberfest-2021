const FilmesCartaz = [
    {
        Id: 1,
        Nome: 'Fátima - A História de Um Milagre',
        Imagem: './assets/img/fatima.jpg',
        Trailer: '',
        Legendado: true,
        Dublado: true,
        Classificacao: '12 Anos',
        Descricao: 'Em Fátima – A História de um Milagre, em meio a Primeira Guerra Mundial, três crianças de Portugal, Jacinta, Francisco Marto e Lucia de Jesus dos Santos testemunham seis visões da Virgem Maria entre os meses de maio e outubro de 1917. Após contar para adultos céticos, a igreja católica romana valida a visão das crianças, transformando a cidade de Fátima em um dos principais lugares de peregrinação. '
    },
    {
        Id: 2,
        Nome: 'Venom: Tempo de Carnificina',
        Imagem: './assets/img/venom.jpg',
        Trailer: '',
        Legendado: true,
        Dublado: false,
        Classificacao: '14 Anos',
        Descricao: 'O relacionamento entre Eddie e Venom (Tom Hardy) está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, esse dois lados descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados.'
    },
    {
        Id: 3,
        Nome: '007 - Sem Tempo Para Morrer',
        Imagem: './assets/img/007.jpg',
        Trailer: '',
        Legendado: true,
        Dublado: true,
        Classificacao: '16 anos',
        Descricao: 'No longa, Bond está desfrutando de uma vida tranquila na Jamaica, depois de ter deixado o serviço ativo. No entanto, sua paz está com os dias contados já que uma nova e secreta missão lhe é dada.'
    },
    {
        Id: 4,
        Nome: 'Ainbo - A Guerreira da Amazônia',
        Imagem: './assets/img/ainbo.png',
        Trailer: '',
        Legendado: false,
        Dublado: true,
        Classificacao: 'Livre',
        Descricao: 'Ainbo é a história de uma jovem garota que nasceu e cresceu na selva da Amazônia na aldeia de Candamo. Um dia ela descobre que sua terra natal está sendo ameaçada e percebe que há outros humanos além de seu povo no mundo. Usando a ajuda de seus guias espirituais, o tatu magricelo “Dillo” e a anta corpulenta “Vaca”, ela embarca em uma jornada para buscar a ajuda do mais poderoso Espírito Materno da Amazônia, a tartaruga “Motelo Mama”. Enquanto ela luta para salvar seu paraíso contra a ganância e exploração ilegal, ela também briga para reverter a destruição e o mal iminente do “Yacaruna”, o demônio mais sombrio que vive na Amazônia. Guiada pelo espírito de sua mãe, Ainbo está determinada a salvar sua terra e seu povo antes que seja tarde demais. '
    },
    {
        Id: 5,
        Nome: 'A Abelhinha Maya e O Ovo Dourado',
        Imagem: './assets/img/maya.jpg',
        Trailer: '',
        Legendado: true,
        Dublado: true,
        Classificacao: 'Livre',
        Descricao: 'Quando Maya, uma pequena abelha teimosa, e seu melhor amigo Willi resgatam uma formiga princesa, eles se percebem no meio de uma batalha épica de insetos que as levará a novos e estranhos mundos, onde a amizade entre eles será testada até o limite. '
    },
    {
        Id: 6,
        Nome: 'Patrulha Canina: O Filme',
        Imagem: './assets/img/patrulha.jpg',
        Trailer: '',
        Legendado: false,
        Dublado: false,
        Classificacao: 'Livre',
        Descricao: 'O Filme é uma produção Nickelodeon e a Spin Master em parceria com a Paramount Pictures. O longa acompanha um grupo de cães falantes que utilizam equipamentos especializados para investigar e resolver crimes, evitando desastres na pequena cidade onde moram. '
    },
    {
        Id: 7,
        Nome: 'Shang-Chi e a Lenda dos Dez Anéis',
        Imagem: './assets/img/shang.jpg',
        Trailer: '',
        Legendado: true,
        Dublado: false,
        Classificacao: '12 Anos',
        Descricao: 'Shang-Chi é um jovem chinês criado por seu pai em reclusão, sendo treinado em artes marciais. Quando ele tem a chance de entrar em contato com o resto do mundo, logo percebe que seu pai não é o humanitário que dizia ser, vendo-se obrigado a se rebelar.'
    },
    {
        Id: 8,
        Nome: 'O Poderoso Chefinho 2: Negócios da Família',
        Imagem: './assets/img/chefinho.jpg',
        Trailer: '',
        Legendado: true,
        Dublado: true,
        Classificacao: 'Livre',
        Descricao: 'O Poderoso Chefinho 2 - Negócios da Família acompanha novamente os irmãos Tim e Ted, agora adultos e vivendo vidas separadas. Enquanto Tim construiu uma vida calma no subúrbio com sua esposa, Carol, e as filhas, Tabitha e Tina, Ted se transformou em um mega empresário que resolve todos os problemas com dinheiro. Mas quando Tim descobre que sua filha caçula também é agente do BabyCorp, ele precisará da ajuda do irmão mais novo para lidar com a situação.'
    },
    {
        Id: 9,
        Nome: 'Os Croods 2: Uma Nova Era',
        Imagem: './assets/img/croods.jpg',
        Trailer: '',
        Legendado: true,
        Dublado: false,
        Classificacao: 'Livre',
        Descricao: 'Os Croods 2: Uma Nova Era, acompanha a jornada dos Croods em busca de um novo lar. Durante a aventura, eles se deparam com uma família "moderna", com costumes completamente diferentes dos deles, os Bemelhores. A família, composta por Esperança Bemelhor (voz de Juliana Paes), Bem Bemelhor (voz de Rodrigo Lombardi) e a filha Aurora, leva uma vida bem diferente da dos homens das cavernas.'
    },
    {
        Id: 10,
        Nome: 'Tom e Jerry - O Filme',
        Imagem: './assets/img/tom.jpg',
        Trailer: '',
        Legendado: true,
        Dublado: true,
        Classificacao: 'Livre',
        Descricao: 'Uma das rivalidades mais amadas da história é reacendida quando Jerry se muda para o melhor hotel de Nova York na véspera do "casamento do século", forçando a desesperada organizadora do evento a contratar Tom para se livrar do rato. A batalha de gato e rato que se segue ameaça destruir a carreira dela, o casamento e até o próprio hotel. Mas logo surge um problema ainda maior: um funcionário diabolicamente ambicioso conspira contra os três. Uma combinação impressionante de animação clássica e live-action, a nova aventura de Tom e Jerry na telona abre novos caminhos para os personagens icônicos e os força a fazer o impensável... trabalhar juntos para salvar o dia.'
    },
]