//Popup functions

$(function () {
        //Styling
        $('#accordion').accordion({
            collapsible: true,
            active: false,
            heightStyle: 'content',
            header: 'h3',
            icons: {
                header: 'ui-icon-plus',
                activeHeader: 'ui-icon-minus',
              },
          });
        $('#accordion2').accordion({
            collapsible: true,
            active: false,
            heightStyle: 'content',
            header: 'h3',
            icons: {
                header: 'ui-icon-plus',
                activeHeader: 'ui-icon-minus',
              },
          });
        $('#files').selectmenu().selectmenu('menuWidget').addClass('overflow');
        $('.button-ui').button();
        $('#internal').checkboxradio();
        $('#includeMatrix').checkboxradio();
        $('#roc').checkboxradio();
        $('#cms').checkboxradio();
        $('.mutliSelect').menu({
            role: null,
          });

        $('#help').click(function () {
            window.open('https://fuel.coxautoinc.com/docs/DOC-144080', '_blank');
          });

        $('#createCase').click(function () {
            var template, matrixTemplate;
            $.getJSON('/lib/data.json', function (json) {
                var config = {
                    internal: $('#internal').is(':checked'),
                    roc: $('#roc').is(':checked'),
                    currentCMS: $('#currentPage').is(':checked'),
                    includeCMS: $('#includeCMS').is(':checked'),
                    includeVLP: $('#includeVLP').is(':checked'),
                    includeVDP: $('#includeVDP').is(':checked'),
                    includeShowRoom: $('#includeShowRoom').is(':checked'),
                    includeMatrix: $('#includeMatrix').is(':checked'),
                    matrixTemplate: 'none',
                  };

                for (var i = 0; i < json.templates.length; i++) {
                  if (json.templates[i].title == $('#template option:selected').val()) {
                    template = json.templates[i];

                  }
                  if (json.templates[i].title == $('#matrixTemplates option:selected').val()) {
                    matrixTemplate = json.templates[i];
                  }
                }

                if ($('#includeMatrix').is(':checked')) {
                  config.matrixTemplate = JSON.stringify(matrixTemplate);
                }

                if (template.title == 'defaultCase') {
                  template.description = localStorage.getItem('SAM:body');
                  template.subject = localStorage.getItem('SAM:subject');
                }

                if (template.title == 'digitalRetailingIssueOff') {
                  config.internal = true;
                  config.isCMS = true;
                  chrome.tabs.executeScript({
                      code: 'var config =' + JSON.stringify(config) + '; var template =' + JSON.stringify(template),
                    }, function () {
                      chrome.tabs.executeScript({
                          file: 'C.S/DROff.js',
                        });
                    });
                } else {
                  chrome.tabs.executeScript({
                      code: 'var config =' + JSON.stringify(config) + '; var template =' + JSON.stringify(template),
                    }, function () {
                      chrome.tabs.executeScript({
                          file: 'C.S/scraper.js',
                        });
                    });
                }

              });
          });

        $('#logCase').click(function () {
            var template;
            $.getJSON('/lib/data.json', function (json) {
                for (var i = 0; i < json.templates.length; i++) {
                  if (json.templates[i].title == $('#template option:selected').val()) {
                    template = json.templates[i];
                  }
                  if (json.templates[i].title == $('#matrixTemplates option:selected').val()) {
                    matrixTemplate = json.templates[i];
                  }

                }

                if ($('#FirstName').val() != '' && $('#LastName').val() != '') {
                  var config = {
                      firstName: $('#FirstName').val(),
                      lastName: $('#LastName').val(),
                      internal: $('#internal').is(':checked'),
                      roc: $('#roc').is(':checked'),
                      currentCMS: $('#currentPage').is(':checked'),
                      includeCMS: $('#includeCMS').is(':checked'),
                      includeVLP: $('#includeVLP').is(':checked'),
                      includeVDP: $('#includeVDP').is(':checked'),
                      includeShowRoom: $('#includeShowRoom').is(':checked'),
                      includeMatrix: $('#includeMatrix').is(':checked'),
                      matrixTemplate: 'none',
                    };
                    if ($('#includeMatrix').is(':checked')) {
                      config.matrixTemplate = JSON.stringify(matrixTemplate);
                    }

                  if (template.title == 'defaultCase') {
                    template.description = localStorage.getItem('SAM:body');
                    template.subject = localStorage.getItem('SAM:subject');
                  }

                  if (template.title == 'digitalRetailingIssueOff') {
                    config.internal = true;
                    config.isCMS = true;
                    chrome.tabs.executeScript({
                        code: 'var config =' + JSON.stringify(config) + '; var template =' + JSON.stringify(template),
                    }, function () {
                        chrome.tabs.executeScript({
                            file: 'C.S/DROff.js',
                        });
                    });
                  } else {
                    chrome.tabs.executeScript({
                        code: 'var config =' + JSON.stringify(config) + '; var template =' + JSON.stringify(template),
                    }, function () {
                        chrome.tabs.executeScript({
                            file: 'C.S/contactScraper.js',
                        });
                    });
                  }

                }
              });
          });

        $('#accountCases').click(function () {
            chrome.tabs.executeScript({
                file: 'C.S/accountCases.js',
              });
          });

        $('#accountContacts').click(function () {
            var template;
            $.getJSON('/lib/data.json', function (json) {
                var config = {
                    internal: $('#internal').is(':checked'),
                    roc: $('#roc').is(':checked'),
                    currentCMS: $('#currentPage').is(':checked'),
                    includeCMS: $('#includeCMS').is(':checked'),
                    includeVLP: $('#includeVLP').is(':checked'),
                    includeVDP: $('#includeVDP').is(':checked'),
                    includeShowRoom: $('#includeShowRoom').is(':checked'),
                    includeMatrix: $('#includeMatrix').is(':checked'),
                    matrixTemplate: 'none',
                  };
                for (var i = 0; i < json.templates.length; i++) {
                  if (json.templates[i].title == $('#template option:selected').val()) {
                      template = json.templates[i];
                  }
                  if (json.templates[i].title == $('#matrixTemplates option:selected').val()) {
                    matrixTemplate = json.templates[i];
                  }
                }

                if ($('#includeMatrix').is(':checked')) {
                  config.matrixTemplate = JSON.stringify(matrixTemplate);
                  console.log(JSON.stringify(matrixTemplate));
                }
                if (template.title == 'defaultCase') {
                  template.description = localStorage.getItem('SAM:body');
                  template.subject = localStorage.getItem('SAM:subject');
                }

                if (template.title == 'digitalRetailingIssueOff') {
                  config.internal = true;
                  config.isCMS = true;
                  chrome.tabs.executeScript({
                      code: 'var config =' + JSON.stringify(config) + '; var template =' + JSON.stringify(template),
                  }, function () {
                      chrome.tabs.executeScript({
                          file: 'C.S/DROff.js'
                      });
                  });
                } else {
                    chrome.tabs.executeScript({
                        code: 'var config =' + JSON.stringify(config) + '; var template =' + JSON.stringify(template)
                    }, function() {
                        chrome.tabs.executeScript({
                            file: 'C.S/accountContacts.js'
                        });
                    });
                }

            });
        });

        $('#logVoicemail').click(function() {
            chrome.tabs.executeScript({
                file: 'C.S/logVoicemail.js'
            });
        });

        $('#logEmail').click(function() {
            chrome.tabs.executeScript({
                file: 'C.S/logEmail.js'
            });
        });

        $('#logOBC').click(function() {
            chrome.tabs.executeScript({
                file: 'C.S/logOBC.js'
            });
        });

        $('#logIBC').click(function() {
            chrome.tabs.executeScript({
                file: 'C.S/logIBC.js'
            });
        });

        $('#clientSegment').click(function() {
            chrome.tabs.executeScript({
                file: 'C.S/clientSegment.js'
            });
        });

        $('#accountNotes').click(function() {
            chrome.tabs.executeScript({
                file: 'C.S/accountNotes.js'
            });
        });

        $('#createMatrix').click(function() {
            var template;
            $.getJSON('/lib/data.json', function(json) {
                var config = {
                    caseNumber: $('#caseNumber').val().replace(/ /g,''),
                    currentCMS: $('#currentPage').is(':checked'),
                    includeCMS: $('#includeCMS').is(':checked'),
                    includeVLP: $('#includeVLP').is(':checked'),
                    includeVDP: $('#includeVDP').is(':checked'),
                    includeShowRoom: $('#includeShowRoom').is(':checked')
                };

                for (var i = 0; i < json.templates.length; i++) {
                    if (json.templates[i].title == $('#matrixTemplates option:selected').val()) {
                        template = json.templates[i];
                        break;
                    }
                }

                if(!(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/.test(config.caseNumber))){
                  if($('#includeMatrix').is(':checked')){
                    $('#alert').append('<div class=\'ui-widget\'> <div class=\'ui-state-error ui-corner-all elementToFadeInAndOut\' style=\'margin-top: 20px; padding: 0 .7em;\'><p><span class=\'ui-icon ui-icon-alert\' style=\'float: left; margin-right: .3em;\'></span><strong>Please Create A Case using SAM </strong></p></div></div>');
                  } else {
                    $('#alert').append('<div class=\'ui-widget\'> <div class=\'ui-state-error ui-corner-all elementToFadeInAndOut\' style=\'margin-top: 20px; padding: 0 .7em;\'><p><span class=\'ui-icon ui-icon-alert\' style=\'float: left; margin-right: .3em;\'></span><strong>Please Enter a Valid Case Number </strong></p></div></div>');
                  }

                    setTimeout(function() {
                        $('#alert').empty();
                    }, 7500);

                } else {
                    chrome.tabs.executeScript({
                        code: 'var config =' + JSON.stringify(config) + '; var template =' + JSON.stringify(template)
                    }, function() {
                        chrome.tabs.executeScript({
                            file: 'C.S/goToMatrix.js'
                        });
                    });
                }
            });

        });

        $('.dropdown dt').on('click', function() {
            $('.dropdown dd ul').slideToggle('fast');
          });

          function getSelectedValue(id) {
            return $('#' + id).find('dt a span.value').html();
          }

          $(document).bind('click', function(e) {
            var $clicked = $(e.target);
            if (!$clicked.parents().hasClass('dropdown')) $('.dropdown dd ul').hide();
          });

//End

// Update the relevant fields with the new data
function setDOMInfo(info) {
    if(/[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]\s*/.test(info.total)){
        document.getElementById('caseNumber').value = info.total;
    }
  }


chrome.tabs.query({
    active: true,
    currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(
          tabs[0].id,
          {from: 'popup', subject: 'DOMInfo'}, setDOMInfo);
    });
});
