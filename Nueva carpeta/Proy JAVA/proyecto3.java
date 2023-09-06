package entregaterceravace;

import java.io.*;

public class proyecto3 {
    static BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
    static PrintStream out = System.out;

    public static void leerDatosMedallas(String[] paises, int[] oro, int[] plata, int[] bronce) throws IOException {
        for (int i = 0; i < paises.length; i++) {
            out.println("\nIngrese los datos para el país " + paises[i]);
            out.print("Medallas de Oro: ");
            oro[i] = Integer.parseInt(in.readLine());
            out.print("Medallas de Plata: ");
            plata[i] = Integer.parseInt(in.readLine());
            out.print("Medallas de Bronce: ");
            bronce[i] = Integer.parseInt(in.readLine());
        }
    }

    public static void calcularPuntajeTotal(int[] oro, int[] plata, int[] bronce, int[] puntajeTotal) {
        for (int i = 0; i < puntajeTotal.length; i++) {
            puntajeTotal[i] = oro[i] * 3 + plata[i] * 2 + bronce[i];
        }
    }

    public static int encontrarGanador(int[] puntajeTotal) {
        int maxPuntaje = puntajeTotal[0];
        int ganadorIndex = 0;

        for (int i = 1; i < puntajeTotal.length; i++) {
            if (puntajeTotal[i] > maxPuntaje) {
                maxPuntaje = puntajeTotal[i];
                ganadorIndex = i;
            }
        }

        return ganadorIndex;
    }

    public static void imprimirMedallero(String[] paises, int[] oro, int[] plata, int[] bronce, int[] puntajeTotal) {
        out.println("\n- - - - - - - - - - - - - - - - - - - - - - - -");
        out.println("Medallero Olímpico - Juegos Olímpicos París 2024");
        out.println("- - - - - - - - - - - - - - - - - - - - - - - -");

        for (int i = 0; i < paises.length; i++) {
            out.println("País: " + paises[i]);
            out.println("Medallas de Oro: " + oro[i]);
            out.println("Medallas de Plata: " + plata[i]);
            out.println("Medallas de Bronce: " + bronce[i]);
            out.println("Puntaje Total: " + puntajeTotal[i]);
            out.println("- - - - - - - - - - - - - - - - - - - - - - - -");
        }
    }

    public static void solicitoDatos() throws IOException {
        int numPaises;
        out.print("Ingrese el número de países: ");
        numPaises = Integer.parseInt(in.readLine());

        String[] paises = new String[numPaises];
        int[] oro = new int[numPaises];
        int[] plata = new int[numPaises];
        int[] bronce = new int[numPaises];
        int[] puntajeTotal = new int[numPaises];

        for (int i = 0; i < numPaises; i++) {
            out.print("Ingrese el nombre del país " + (i + 1) + ": ");
            paises[i] = in.readLine();
        }

        leerDatosMedallas(paises, oro, plata, bronce);
        calcularPuntajeTotal(oro, plata, bronce, puntajeTotal);
        imprimirMedallero(paises, oro, plata, bronce, puntajeTotal);

        int ganadorIndex = encontrarGanador(puntajeTotal);
        out.println("El país ganador es: " + paises[ganadorIndex]);
    }

    public static void main(String[] args) throws IOException {
        solicitoDatos();
    }
}
