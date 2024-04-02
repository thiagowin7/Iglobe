function valor_planoRadio() {
    $(function () {
        function add_new_event() {
            var myValueP2 = $('[name="perg-2"]').filter(':checked').val();
            var myValueP3 = $('[name="perg-3"]').filter(':checked').val();
            var myValue = $('[name="toggle"]').filter(':checked').val();
            
            if(myValueP2 == 'nao' && myValueP3 == 'nao'){
                plano_recomendado = '150 MEGA';
                // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>79</strong>,90/mês</p>')
                $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
            }
            else if(myValueP2 == 'sim' && myValueP3 == 'nao'){
                plano_recomendado = '150 MEGA';
                // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>79</strong>,90/mês</p>')
                $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
            }
            else if(myValueP2 == 'nao' && myValueP3 == 'sim'){
                plano_recomendado = '150 MEGA';
                // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>79</strong>,90/mês</p>')
                $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
            }
            else if(myValueP2 == 'sim' && myValueP3 == 'sim'){
                plano_recomendado = '300 MEGA';
                // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>79</strong>,90/mês</p>')
                $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
            }

            switch (myValue) {
                case '':
                    valor_total = "";
                    break;
                case '150 MEGA':
                    plano_recomendado = '150 MEGA';
                    // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>19</strong>,90/mês</p>')
                    $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
                    $('.change').html('Plano escolhido por você:')
                    break;
                case '300 MEGA':
                    plano_recomendado = '300 MEGA';
                    // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>19</strong>,90/mês</p>')
                    $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
                    $('.change').html('Plano escolhido por você:')
                    break;
                case '400 MEGA':
                    plano_recomendado = '400 MEGA';
                    // $('.valor').html('<p id="valor_tot_recomendado">R$<strong>19</strong>,90/mês</p>')
                    $('.valor').html('<p id="valor_tot_recomendado">Sob-consulta</p>')
                    $('.change').html('Plano escolhido por você:')
                    break;
            }

            document.getElementById('plano_ideal').value = plano_recomendado;
        }

        $('input').on('change', function () {
            add_new_event();
            $('label').removeClass('opt');
        });
        $('label').on('click', function(){
            $('label').removeClass('active');
            $(this).addClass('active');
        });
    });
}

function confirmacao() {
    var resposta = confirm("Deseja assinar esse plano?");

    if (resposta == true) {
        if (document.form.nome.value == "") {
            alert("Preencha o campo NOME!");
            document.form.nome.focus();
            return false;
        }

        if (document.form.celular.value == "" || document.form.celular.value.length < 10) {
            alert("Preencha o campo CELULAR corretamente!");
            document.form.celular.focus();
            return false;
        }

        if (document.form.endereco.value == "") {
            alert("Preencha o campo ENDEREÇO!");
            document.form.endereco.focus();
            return false;
        }

        document.form.submit();
    }

    if (resposta === false) {
        document.getElementById("form").addEventListener("click", function (event) {
            event.preventDefault();
        });
    }
}
