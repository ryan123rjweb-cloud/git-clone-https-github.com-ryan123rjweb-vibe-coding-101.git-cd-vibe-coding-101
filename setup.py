"""Set up the classroom starter: py setup.py."""

from pathlib import Path
import shutil
import subprocess
import sys
import venv


def main():
    if sys.version_info < (3, 10):
        raise SystemExit("Install Python 3.10 or newer, then run setup again.")
    root = Path(__file__).resolve().parent
    environment = root / ".venv"
    print("Creating the project Python environment...", flush=True)
    venv.EnvBuilder(with_pip=True).create(environment)
    python = environment / ("Scripts/python.exe" if sys.platform == "win32" else "bin/python")
    subprocess.run([str(python), "-m", "pip", "install", "-r", "requirements.txt"], cwd=root, check=True)
    if not (root / ".env").exists():
        shutil.copyfile(root / ".env.example", root / ".env")
    subprocess.run([str(python), "-m", "pytest", "-q"], cwd=root, check=True)
    print("Ready! Run the starter: .\\.venv\\Scripts\\python.exe src\\app.py", flush=True)


if __name__ == "__main__":
    try:
        main()
    except subprocess.CalledProcessError as error:
        raise SystemExit(error.returncode)
