import { H2 } from "../../components/Tags";
import Q3taskHome from "./Q3todoContextReducer/Q3taskHome";
import Q3homeContext from "./Q3useContext/Q3homeContext";
import Q3multipleContext from "./Q3useContext/Q3multipleContext";
import Q3objectContext from "./Q3useContext/Q3objectContext";
import Q3useEffect from "./Q3useEffect";
import Q3useReducer from "./Q3useReducer";
import Q3useReducerInitialState from "./Q3useReducerInitialState";
import Q3useReducerTodo from "./Q3useReducerTodo";
import Q3useState from "./Q3useState";

const HookThree = () => {
  return (
    <div>
      <H2>3. Jelaskan cara menggunkan use effect, use state, use reducer</H2>
      <ul className="list-inside list-disc">
        <li>
          <b>useState</b> untuk menggunakan useState dibutuhkan variable dan updaternya, parameter updater harus berupa nilai
          atau fungsi yang mengembalikan nilai. ketika state berubah, maka komponen akan re-render.
        </li>
        <Q3useState />
        <li>
          <b>useEffect</b> memungkinkan kita melakukan side effects pada komponent setelah komponen dirender atau ketika
          dependensi tertentu berubah. useEffect memiliki dua argumen: fungsi yang melakukan side efect dan dependensi yang
          menentukan kapan efek harus dijalankan
        </li>
        <li>
          side effect adalah kode apapun yang memiliki efek di luar komponen seperti adalah fetch data (http request), update
          DOM secara langsung, localstorage, timers.
        </li>
        <li>
          dependensi adalah array yang bisa diisi identifier berupa variable atau fungsi yang tentukan kapan fungsi effect
          dipanggil. jika dependensi tidak ada maka effek akan dipanggil ketika komponen terdeteksi rerender misal karena
          perubahan state. Jika diisi array kosong [] maka akan memanggil effect ketika komponen pertama kali dirender. Jika
          diisi array isi [state|function] maka akan memanggil effect sesuai dengan state yang berubah
        </li>
        <li>
          clean up function adalah return berupa fungsi dari sebuah effect yang akan dijalankan saat komponen tidak lagi
          digunakan. seperti Timeouts, subscriptions, event listeners.
        </li>
        <li>
          urutan eksekusi: render, effect, perubahan state, re-render dengan state baru, clean up function, effect
          selanjutnya dijalankan
        </li>
        <Q3useEffect />
        <li>
          useReducer mirip useState memungkinkan logika custom state. jika logikanya kompleks gunakan useReducer. useReducer
          menerima dua argumen: fungsi reducer dan initial state
        </li>
        <li>
          fungsi reducer berisi custom state logic kamu. initialState bisa jadi nilai biasa tapi biasanya objek. useReducer
          mengembalikan current state dan dispatch method
        </li>
        <Q3useReducer />
        <Q3useReducerTodo />
        <Q3useReducerInitialState username={"ahmad"} />
        <li>
          <b>useContext & useReducer</b>
        </li>
        <Q3homeContext />
        <Q3objectContext />
        <Q3multipleContext />
        <Q3taskHome />
      </ul>
    </div>
  );
};

export default HookThree;
