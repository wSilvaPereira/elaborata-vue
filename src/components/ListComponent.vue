<template>
    <div>
        <table id="tblContatos" class="table table-striped table-responsive table-hover">
            <thead>
                <th>Id</th>
                <th>Nome</th>
                <th>idade</th>
                <th>Excluir</th>
                <th>Alterar</th>
            </thead>
            <tbody id="tblProdutoBody">
                <tr v-for="contato in contatos" v-bind:key="contato.id">
                    <td>{{ contato.id }}</td>
                    <td>{{ contato.nome }}</td>
                    <td>{{ contato.idade }}</td>
                    <td><button class="btn btn-danger btn-block w-100">Excluir</button></td>
                    <td><button class="btn btn-primary btn-block w-100">Alterar</button></td>
                </tr>
            </tbody>
        </table>
        <!-- <div v-for="contato in contatos" v-bind:key="contato.id">
            {{ contato.nome }} - {{contato.idade  }}
        </div> -->
    </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            contatos: []
        }
    },
    created() {
        let apiURL = "http://localhost:3000/contatos";

        axios.get(apiURL).then((resp) => {
            this.contatos = resp.data;
            // alert(JSON.stringify(resp));
        }).catch(error => {
            console.log(error);
        })
    }
}

</script>