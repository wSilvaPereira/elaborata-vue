<template>
    <div>
        <table
            id="tblContatos"
            class="table table-striped table-responsive table-hover"
        >
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
                    <td>
                        <!-- <button id="contato.id" class="btn btn-danger btn-block w-50" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="contato.id"> -->
                        <button
                            class="btn btn-danger btn-block w-50"
                            @click="excluir(contato)"
                        >
                            Excluir
                        </button>
                    </td>
                    <td>
                        <button
                            class="btn btn-primary btn-block w-50"
                            @click="alterar(contato)"
                        >
                            Alterar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Modal -->
    <div
        class="modal fade modal-dialog modal-fullscreen"
        id="exampleModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">
                        Deseja excluir o registro selecionado?
                    </h5>
                </div>
                <div class="modal-body">O processo não poderá ser desfeito</div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Não
                    </button>
                    <button type="button" class="btn btn-primary">Sim</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            contatos: [],
        };
    },
    created() {
        let apiURL = "http://localhost:3000/contatos";

        axios
            .get(apiURL)
            .then((resp) => {
                this.contatos = resp.data;
                // alert(JSON.stringify(resp));
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        excluir(contato) {
            let apiURL = "http://localhost:3000/contatos";

            if (confirm("Deseja excluir o contato?")) {
                axios
                    .delete(apiURL + "/" + contato.id)
                    .then(() => {
                        this.contatos = this.contatos.filter(
                            (cont) => contato.id != cont.id
                        );
                        alert("Contato excluído");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        alterar(){
            // let apiURL = "http://localhost:3000/contatos"; 
        }
    },
};
</script>

<style>
table {
    text-align: center;
}
</style>
