$(document).ready(function() {
    $('<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">').appendTo("head");
    $('<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">').appendTo("head");
    $('<style>#integration_form{position: fixed;top: 5px;right: 5px;padding: 5px;border-radius: 5px;border: 3px solid grey;}</style>').appendTo("head");
    $('body').after($('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>'));

    $('<div id="integration_form" data-toggle="modal" data-target=".modal">Quero me Cadastrar</div>').appendTo("body");

    var integration_form = $('#integration_form');
    integration_form.click(function() {
        integration_form.hide()
        integration_form.dynaform(options);
    });
    function submitForm() {
        //chamr endpoint aqui
        integration_form.show();
    };

    jQuery.fn.extend({
        dynaform: function(hash) {
            var form = '<div id="myModal" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">Quero recebere as novidades...</h4></div><div class="modal-body">' +
                '<form name="myForm">' +
                '  <div class="form-group">' +
                '    <label for="name">Name:</label>' +
                '    <input type="text" class="form-control" id="name" required>' +
                '  </div>' +
                '  <div class="form-group"><label for="email">Email address:</label>' +
                '    <input type="email" class="form-control" id="email" required>' +
                '  </div>' +
                '</form>' +
                '</div><div class="modal-footer"><button type="button" onclick="submitForm()" class="btn btn-default" data-dismiss="modal">Fechar</button></div></div></div></div>';
            $(form).appendTo("body");

            if (hash != null) {
                $.each(hash.fields, function(key, value) {
                    var camelKey = key.substr(0, 1).toUpperCase() + key.substr(1).toLowerCase();
                    var field = '<div class="form-group"><label for="' + key + '">' + camelKey + ':</label><select class="form-control" id="' + key + '"></select></div>';
                    $(field).appendTo("form");
                    var select = $('#' + key)[0];
                    $.each(value, function(k, v) {
                        select.add(new Option(v, k));
                    });
                });
            }
            $('<button type="submit" class="btn btn-default">Submit</button>').appendTo("form");
        }
    });

    var options = {
        'token': '62bb61431348e22850828a5829c4373faafe29c1',
        'secret': '51a266c2844ccd5cac83d88de88d82d05358aa51',
        'fields': {
            'estado': ['PR', 'SC', 'SP', 'RS'],
            'nível': ['Iniciante', 'Intermediário', 'Avançado', 'Ninja']
        }
    }

});
