<template>
    <div v-if="!this.confirmando">
        <table id="tblContatos" class="table table-striped table-responsive table-hover table-borderless col-md-12">
            <thead>
                <th>Id</th>
                <th>Nome</th>
                <th>idade</th>
                <th>Excluir</th>
                <th>Alterar</th>
            </thead>
            <tbody id="tblProdutoBody" class="table-dark">
                <tr v-for="contato in contatos" v-bind:key="contato.id">
                    <td>{{ contato.id }}</td>
                    <td>{{ contato.nome }}</td>
                    <td>{{ contato.idade }}</td>
                    <td>
                        <!-- <router-link :to="{ name: 'confirmar' }" class="btn btn-danger btn-block w-50">
                            Excluir
                        </router-link>                         -->
                        <button class="btn btn-danger btn-block w-50" @click.prevent="excluir(contato)">
                            Excluir
                        </button>
                        <!-- <button class="btn btn-danger btn-block w-50" @click="$emit('confirmado')">
                            Excluir
                        </button> -->
                    </td>
                    <td>
                        <router-link :to="{ name: 'edit', params: { id: contato.id } }"
                            class="btn btn-primary btn-block w-50">
                            Editar
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        <ConfirmarComponent @confirmado="callback">

        </ConfirmarComponent>
    </div>
</template>

<script>
import ConfirmarComponent from "@/components/ConfirmarComponent.vue";
import axios from "axios";
let apiURL = "http://localhost:3000/contatos";

export default {
    data() {
        return {
            contatos: [],
            confirmando: false
        };
    },
    components: {
        ConfirmarComponent
    },
    mounted() {
        axios
            .get(apiURL)
            .then((res) => { this.contatos = res.data; })
            .catch((error) => { console.log(error); });
    },
    methods: {
        excluir(contato) {
            if (confirm("Deseja excluir o contato?")) {
                axios
                    .delete(apiURL + "/" + contato.id)
                    .then(() => {
                        this.contatos = this.contatos.filter((cont) => contato.id != cont.id);
                        alert("Contato excluído");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        confirmado() {
            alert("clique confirmado");
        },
        submit() {
            this.$emit("confirmado");
        }
    }
};
</script>

<style>
table {
    text-align: center;
}
</style>
