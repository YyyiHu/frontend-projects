<template>
  <Header />
  <div class="container">
    <Balance :total="+total" />
    <!-- convert the string type to number -->
    <IncomeExpenses :income="+income" :expenses="+expenses" />
    <TransactionList
      :transactions="transactions"
      @transactionDelete="handleTransactionDelete"
    />
    <!-- handle transaction submit -->
    <AddTransaction @transactionSubmit="handleTransactionSubmit" />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionList from "./components/TransactionList.vue";
import AddTransaction from "./components/AddTransaction.vue";
import { ref, computed, onMounted } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const transactions = ref([]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem("transactions"));

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

// get total
const total = computed(() => {
  return transactions.value.reduce((accumulator, currentTransaction) => {
    return accumulator + currentTransaction.amount;
  }, 0);
});

// get income
const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((accumulator, currentTransaction) => {
      return accumulator + currentTransaction.amount;
    }, 0)
    .toFixed(2);
});

// get expenses
const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((accumulator, currentTransaction) => {
      return accumulator + currentTransaction.amount;
    }, 0)
    .toFixed(2);
});

const generateUniqueId = () => {
  return crypto.randomUUID();
};

// add transaction
const handleTransactionSubmit = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });
  saveTransactionaToLocalStorage();
  toast.success("Transaction added");
};

const handleTransactionDelete = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id
  );
  saveTransactionaToLocalStorage();

  toast.success("Transaction deleted");
};

// save to localstorage
const saveTransactionaToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value));
};
</script>
