import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en el useFetch', () => {
  test('Debe de retornar la información por defecto', () => {
    const { result } = renderHook(() => useFetch('https://reqres.in/api/users?page=2'));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('Debe de retornar la información deseada, loading en false, error en null', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/api/users?page=2'));
    await waitForNextUpdate();
    const { data:{data}, loading, error } = result.current;

    expect(data.length).toEqual(6)
    expect(loading).toBe(false)
    expect(error).toBe(null)

  });

  test('Debe de manejar el error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'));
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data).toBe(null)
    expect(loading).toBe(false)
    expect(error).toBe('No se pudo cargar la información')

  });
});
