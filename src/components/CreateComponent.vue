<template>
    <div class="row justify-content-center container">
        <div class="col-md-6">
            <h1>Novo Contato</h1>
            <form @submit.prevent="handleSubmitForm" class="container">
                <div class="form-group">
                    <label for="nome">Nome</label>
                    <input type="text" class="form-control" v-model="contato.nome" required>
                </div>
                <div class="form-group">
                    <label for="idade">Idade</label>
                    <input type="number" class="form-control" v-model="contato.idade" required>
                </div>
                <div class="form-group mt-3">
                    <button type="submit" class="btn btn-success btn-block w-100">Criar</button>
                </div>
            </form>
        </div>

    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            contato: {
                id: 0,
                nome: '',
                idade: 0,
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = "http://localhost:3000/contatos";

            axios.post(apiURL, this.contato).then(() => {
                this.$router.push("/view");
                this.contato = {
                    "nome": '',
                    "idade": 0
                }
                alert('Contato registrado')
            }).catch(error => {
                console.log(error);
            })
        }
    }
}

</script>