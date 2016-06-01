---
title: ".NET MicroFramework - Size Matters"
date: 2013-06-22
start_time: 12:00:00 +0100
end_time: 13:30:00 +0100
speakers: ["cesarafonso"]
videos_urls: ["http://www.youtube.com/watch?v=wTnQZgdOgC4"]
meeting: 39a-reuniao-presencial-da-comunidade-netponto-em-lisboa
redirect_from: /sessao/net-microframework-size-matters/
---
A MicroFramework .NET é uma implementação da Microsoft da Common Language Infrastructure (CLI) para sistemas embebidos. Isto significa ter todas as vantagens dos Ambientes Virtuais de Execução no mundo dos dispositivos com recursos muito limitados. Com apenas 300KB, contém uma versão reduzida de funcionalidades (cerca de 70 classes e 420 métodos) consideradas essenciais para dar resposta às necessidades das aplicações que funcionam neste tipo de sistemas. Devido à escassez de recursos, muito teve de sair da versão micro. A gestão de memória sofreu alterações (o Garbage Collector usa um algoritmo mark-and-sweep), tal como o próprio funcionamento do Common Language Runtime (CLR). Tudo tendo como foco a eficiência.

Consegues imaginar melhor forma de escrever código do que no Visual Studio e com uma linguagem de programação managed? Consegues imaginar todo o potencial de .NET num dispositivo do tamanho de um dedo?

A sessão começará com a "Big Picture" e terminará com alguns detalhes interessantes específicos da .NETMF.

A introdução será feita com uma breve história sobre microcontroladores (Como chegámos até aqui?), seguindo-se uma apresentação da framework da Microsoft. Serão abordadas algumas temáticas específicas desta versão micro: Gestão de memória (funcionamento do Garbage Collector), Threading, tipos intrínsecos, modos de execução, compilação IL e integração com Visual Studio. Muitos destes conceitos serão demonstrados numa demo usando um dispositivo (hardware) com um preço muito atractivo - cerca de 30€. Após a demo, serão apresentados outros exemplos de projectos utilizando dispositivos semelhantes (alguns projectos comerciais, outros apenas lúdicos). Inevitavelmente, vai ser recorrente a comparação com a versão desktop da Framework (features omitidas e adicionadas). Serão ainda introduzidos alguns dos desenvolvimentos recentes da Microsoft (maior virtualização - .NET Gadgeteer).

No fecho da sessão, já mais em forma de debate, tentaremos em conjunto responder à questão: e o futuro da .NETMF? 

