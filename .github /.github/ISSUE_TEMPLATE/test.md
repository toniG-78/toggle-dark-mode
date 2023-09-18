
---
name: BANNER IUBENDA - template issue
about: Integrazione del banner Iubenda, issue generica
title: "[DEV-BE][DEV-FE] - IUBENDA - integrazione banner"
labels: 'layer: be, layer: fe, deploy: production, product: public website'
assignees: ''

---

- Stilizzazione/integrazione -> Issue di riferimento:
   https://github.com/nodesoccoop/Confcooperative-PortaleDNN-SkinTerritoriali/issues/26


- [ ] Generare la licenza
- [ ] Aggiungere i servizi

_N O T A:_ 
DAL SEGUENTE ELENCO RIMUOVERE I SERVIZI NON NECESSARI O AGGIUNGERE QUELLI NON ELENCATI SECONDO IL PORTALE

| Modulo di contatto | Google reCAPTCHA | Widget Google Maps | Google Fonts e Font Awesome | Google Analytics 4 |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Dati Personali: cognome; email; nome; numero di telefono  | Dati Personali: clic; Dati di utilizzo; eventi keypress; eventi relativi ai sensori di movimento; eventi touch; movimenti del mouse; posizione relativa allo scorrimento; risposte alle domande; Strumento di Tracciamento  | Dati Personali: Dati di utilizzo  | Dati Personali: Dati di utilizzo; Strumento di Tracciamento  |  Dati Personali: Dati di utilizzo; Strumento di Tracciamento | 

| Google Tag Manager | AddThis | sessionStorage |  localStorage |  Pulsante Mi Piace e widget sociali di Facebook|
| ------------------ |-----------| ------------------| ------------- | -------------- |
| Dati Personali: Dati di utilizzo | Servizio Pro |      |      |  Strumenti di tracciamento; Dati di utilizzo |

| Widget Video YouTube | Il pulsante Tweet e i widget sociali di Twitter | 
| ------------------ | -------------| 
| Dati di utilizzo | Strumenti di tracciamento; Dati di utilizzo | 

|  Mailing list o newsletter| Registrazione diretta |
| -------------------------- | ----------------------------------------- |
| Nome, Cognome. Strumenti di tracciamento, Dati di utilizzo |  Dati di utilizzo; email; password; varie tipologie di Dati |

- [ ] TITOLARE DEL TRATTAMENTO DEI DATI 
- [ ] DPO
 

--------------------------------------------------------

- [ ] Confermare l'elenco dei servizi e se le impostazioni sono corrette 

- [ ] Integrare lo script e il Css sul portale 
  (nel caso in cui la "Minificazione" sia abilitata, deve essere disabilitata prima di intervenire sui file)

- [ ] Pagine Privacy e Cookie -> inserire i rispettivi link
  Se richiesto  -> pagina NOTE LEGALI diventa COOKIE e rimandare alla pagina cookie policy di Iubenda (abilitare "Apri il link in una nuova finestra")

_N O T A:_ 
nel caso in cui il "LOGIN" sia gestito nel FOOTER intervenire nella "SKIN/File" dove è scolpito il "HTML", ad esempio --> `footer.ascx` o `footer-login.ascx`
![Immagine 2022-11-11 185753](https://user-images.githubusercontent.com/97436469/201400772-d94ec8ba-8170-4390-9f87-f8d7283eea97.jpg)


  
