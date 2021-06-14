import os
import subprocess
import sys


PACKAGE_ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))

RED = '\033[0;31m'
GREEN = "\033[0;32m"
NO_COLOUR = '\033[0m'


def get_npm_package_json_version():
    process = subprocess.run(
        """npm version --json | jq --raw-output '.["planex-site"]'""",
        shell=True,
        capture_output=True
    )

    return process.stdout.strip().decode()


def get_python_setup_version():
    process = subprocess.run(["python", "setup.py", "--version"], capture_output=True)
    return process.stdout.strip().decode("utf8")


CURRENT_VERSION_FUNCTIONS = {
    "python": get_python_setup_version,
    "npm": get_npm_package_json_version
}


def get_expected_semantic_version():
    process = subprocess.run(["git-mkver", "next"], capture_output=True)
    return process.stdout.strip().decode("utf8")


if __name__ == "__main__":
    os.chdir(PACKAGE_ROOT)

    try:
        current_version = CURRENT_VERSION_FUNCTIONS[sys.argv[1]]()
    except KeyError:
        raise ValueError(
            f"The argument to this script must be one of {set(CURRENT_VERSION_FUNCTIONS.keys())!r}; received "
            f"{sys.argv[1]!r}."
        )

    expected_semantic_version = get_expected_semantic_version()

    if current_version != expected_semantic_version:
        print(
            f"{RED}VERSION FAILED CHECKS:{NO_COLOUR} The current version ({current_version}) is different from the "
            f"expected semantic version ({expected_semantic_version})."
        )
        sys.exit(1)

    print(
        f"{GREEN}VERSION PASSED CHECKS:{NO_COLOUR} The current version is the same as the expected semantic version: "
        f"{expected_semantic_version}."
    )
    sys.exit(0)
