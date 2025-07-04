MÉTODO POR INSTANCIA (CALCULADORA)

namespace Operaciones
{
  public class Calculadora 
  {    
    public string Suma(int numero1, int numero2)
    {
      int resultado = numero1 + numero2;
      return ResultadoOperacion(resultado);
    }
    public string Diferencia(int numero1, int numero2)
    {
      int resultado = numero1 - numero2;
      return ResultadoOperacion(resultado);
    }
    public string Multiply(int numero1, int numero2)
    {
      int resultado = numero1 * numero2;
      return ResultadoOperacion(resultado);
    }
    public string Division(int numero1, int numero2)
    {
      if (numero2 != 0)
      {
        int resultado = numero1 / numero2;
        return ResultadoOperacion(resultado);
      }
      else
      {
        return "Error: División por cero no permitida.";
      }
    }

    // Método privado de instancia
    private string ResultadoOperacion(int resultado)
    {
      return $"El resultado de la operacion es: {resultado}";
    }
  }
}
using Operaciones;

class Program
{
  static void Main()
  {
    Calculadora miCalculadora = new Calculadora();

    string resultado1 = miCalculadora.Suma(4, 5);
    string resultado2 = miCalculadora.Diferencia(10, 3);

    Console.WriteLine(resultado1); // El resultado de la operacion es: 9
    Console.WriteLine(resultado2); // El resultado de la operacion es: 7
  }
}