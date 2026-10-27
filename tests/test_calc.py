from calc import add
from pathlib import Path
import subprocess
import sys


class TestAddScenarioCombiningTwoPrices:
    def test_case_typical_prices(self):
        assert add(2, 3) == 5

    def test_case_partial_refund(self):
        assert add(-2, 3) == 1


def run_app(*args):
    return subprocess.run(
        [sys.executable, str(Path(__file__).resolve().parents[1] / "src" / "app.py"), *args],
        capture_output=True, text=True,
    )


def test_starter_displays_greeting_and_default_calculation():
    result = run_app()
    assert result.returncode == 0
    assert "Hello, Vibe Coding 101!" in result.stdout
    assert "2 + 3 = 5" in result.stdout


def test_starter_accepts_user_numbers():
    result = run_app("-2", "3.5")
    assert result.returncode == 0
    assert "-2 + 3.5 = 1.5" in result.stdout


def test_starter_rejects_invalid_numbers():
    result = run_app("hello", "3")
    assert result.returncode != 0
    assert "invalid float value" in result.stderr
