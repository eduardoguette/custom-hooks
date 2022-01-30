 
import {act, renderHook} from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter';


describe('Pruebas en el <useCounter/>', () => {
  test('Debe retornar valores por defectos', () => {
    
    const {result} = renderHook( () => useCounter()) 
    expect(result.current.counter).toBe(10)
     expect(typeof result.current.increment).toBe('function')
     expect(typeof result.current.decrement).toBe('function')
     expect(typeof result.current.reset).toBe('function')

  });

  test('Debe de tener el counter en 100', () => {
    
    const { result } = renderHook(() => useCounter(100))

    expect(result.current.counter).toBe(100)


  })

  test('Debe de incrementar el counter en 1', () => {
    
    const {result } = renderHook(() => useCounter(100))
    const {increment} = result.current;

    act(() => {
      increment()
    })
    expect(result.current.counter).toBe(101)

  })
  
  test('Debe de decrementar el counter en 1', () => {
    
    const {result } = renderHook(() => useCounter(100))
    const {decrement} = result.current;

    act(() => {
      decrement() 
    })
    expect(result.current.counter).toBe(99)

  })
  test('Debe de establecer el valor en 100', () => {
    
    const {result } = renderHook(() => useCounter(100))
    const {decrement, reset} = result.current;

    act(() => {
      decrement()
      reset()
    })
    expect(result.current.counter).toBe(100)

  })
  
  
  
});
